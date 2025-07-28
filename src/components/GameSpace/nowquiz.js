import { useMyContext } from "../../context/Mycontexts";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Nowquiz.css";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Nowquiz() {
  const {
    allQuestions, setAllQuestions, Level, setLevel,
    myNowScore, setMyNowScore, myScore, setMyScore,
    count, setCount, level, username,
    highScore, setHighScore, limit, setLimit,
    setNextTimer, nextTimer
  } = useMyContext();

  const question = allQuestions[0]; // Current question

  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);

  const levelDetails = {
    1: { time: 0, score: 5, negativeScore: 0, count: 15, difficulty: 'Easy' },
    2: { time: 15, score: 5, negativeScore: 1, count: 15, difficulty: 'Easy' },
    3: { time: 10, score: 5, negativeScore: 3, count: 15, difficulty: 'Easy' },
    4: { time: 10, score: 8, negativeScore: 3, count: 15, difficulty: 'Moderate' },
    5: { time: 8, score: 10, negativeScore: 5, count: 15, difficulty: 'Moderate' },
    6: { time: 8, score: 10, negativeScore: 8, count: 15, difficulty: 'Moderate' },
    7: { time: 5, score: 10, negativeScore: 8, count: 15, difficulty: 'Moderate' },
    8: { time: 5, score: 10, negativeScore: 10, count: 15, difficulty: 'Moderate' }
  };

  useEffect(() => {
    const shuffled = shuffleArray(allQuestions);
    setAllQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (!nextTimer) {
      setAnswerStatus("correct");

      const timeout = setTimeout(() => {
        setAllQuestions((prev) => prev.slice(1));
        setNextTimer(true);
      }, 2500); // wait 2.5 seconds showing correct

      return () => clearTimeout(timeout);
    }
  }, [nextTimer]);

  useEffect(() => {
    if (question) {
      const { wrong1, wrong2, wrong3, correct } = question.ans;
      const allAnswers = shuffleArray([wrong1, wrong2, wrong3, correct]);
      setShuffledAnswers(allAnswers);
      setSelectedAnswer(null);
      setAnswerStatus(null);
    }
  }, [question]);

  async function replaceUserScore(username, newScore) {
    await setDoc(doc(db, "scoreboard", username), {
      username: username,
      score: newScore,
      timestamp: new Date(),
    });
  }

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    const isCorrect = answer === question.ans.correct;
    setAnswerStatus(isCorrect ? "correct" : "incorrect");

    const newScore = isCorrect
      ? myNowScore + levelDetails[level].score
      : myNowScore - levelDetails[level].negativeScore;

    setMyNowScore(newScore);
    setCount((prev) => prev + 1);

    if ((count + 1) % 15 === 0 && count !== 0) {
      setLevel((prev) => prev + 1);
      setLimit(levelDetails[level + 1]?.time || 10);

      if (myScore < newScore) {
        setMyScore(newScore);
        replaceUserScore(username, newScore);
        if (highScore < newScore) {
          setHighScore(newScore);
        }
      }
    }

    setTimeout(() => {
      setNextTimer(false); // triggers 2.5s delay to move forward
    }, 500); // show result before next question delay starts
  };

  if (!question) return <div>✅ Quiz Completed!</div>;

  return (
    <div className="quiz-container">
      <div className="question">{question.quest}</div>
      <div className="answers-grid">
        {shuffledAnswers.map((answer, i) => {
          let className = "answer";

          if (selectedAnswer || answerStatus === "correct") {
            if (answer === question.ans.correct) {
              className += " correct";
            } else if (answer === selectedAnswer && answer !== question.ans.correct) {
              className += " incorrect";
            }
          }

          return (
            <button
              key={i}
              className={className}
              onClick={() => handleAnswerClick(answer)}
              disabled={!!selectedAnswer || answerStatus === "correct"}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}


