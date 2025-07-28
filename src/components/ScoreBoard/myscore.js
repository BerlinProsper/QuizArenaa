import { useEffect , useState} from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useMyContext } from "../../context/Mycontexts";
import { useNavigate } from "react-router-dom";

export default function MyScore() {
  const { username, myScore , setMyScore, highScore, setHighScore } = useMyContext();
  const [scoreSaved, setScoreSaved] = useState(false); // prevent multiple writes

const checkAndAddScore = async (username, setMyScore, setHighScore) => {
  if (!username) return;

  const scoreboardRef = collection(db, "scoreboard");

  try {
    // 1. Check if user exists, create if not
    const docRef = doc(db, "scoreboard", username);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        username,
        score: 0,
        timestamp: new Date(),
      });
      console.log("✅ Score document created for", username);
      setMyScore(0);
    } else {
      const userData = docSnap.data();
      setMyScore(userData.score);
      console.log("ℹ️ Existing user data loaded:", userData);
    }

    // 2. Get highest score
    const topScoreQuery = query(scoreboardRef, orderBy("score", "desc"), limit(1));
    const querySnapshot = await getDocs(topScoreQuery);

    if (!querySnapshot.empty) {
      const topDoc = querySnapshot.docs[0];
      const topData = topDoc.data();
      console.log("🏆 Top scorer:", topDoc.id, topData);

      setHighScore(topData.score);
    } else {
      console.log("⚠️ No top score found");
      setHighScore(0);
    }
  } catch (e) {
    console.error("❌ Firestore error:", e);
  }
};
 useEffect(() => {

       checkAndAddScore(username, setMyScore, setHighScore);
  }, [username]);
  return (
    <div>
    </div>
  );
}
