import { useMyContext } from "../../context/Mycontexts";
import { useEffect, useState } from "react";
import "./Nowquiz.css"; // External CSS for cleaner code

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Nowquiz({onQuizEnd}) {
  const { allQuestions , setAllQuestions , selectedItems , setSelectedItems, noItems, setNoItems } = useMyContext();
  console.log("in new ques +"+ allQuestions);
  
  const question = allQuestions[0];
    console.log("in new ques +"+ allQuestions);

  setAllQuestions(prev => prev.slice(1))
  if (noItems > 0){
    setSelectedItems(prev => prev.slice(0,-1))
  setNoItems(prev => prev - 1);
  // onQuizEnd();
  }


  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);

  useEffect(() => {
    if (question) {
      const allAnswers = shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      setShuffledAnswers(allAnswers);
    }
  }, [question]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    setTimeout(() => {
      setAnswerStatus(answer === question.correct_answer ? "correct" : "incorrect");
    }, 1000);
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div className="quiz-container">
      <div className="question">{question.question}</div>
      <div className="answers-grid">
        {shuffledAnswers.map((answer, i) => {
          let className = "answer";
          if (selectedAnswer === answer) {
            className += " selected";
            if (answerStatus === "correct" && answer === question.correct_answer)
              className += " correct";
            else if (answerStatus === "incorrect")
              className += answer === question.correct_answer ? " correct" : " incorrect";
          }

          return (
            <button
              key={i}
              className={className}
              onClick={() => handleAnswerClick(answer)}
              disabled={!!selectedAnswer}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}

