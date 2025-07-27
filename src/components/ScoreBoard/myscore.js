import { useEffect , useState} from "react";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useMyContext } from "../../context/Mycontexts";

export default function MyScore() {
  const { username } = useMyContext();
  const [scoreSaved, setScoreSaved] = useState(false); // prevent multiple writes

 useEffect(() => {
    const checkAndAddScore = async () => {
      if (!username) return;

      try {
        const docRef = doc(db, "scoreboard", username); // use username as doc ID
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          await setDoc(docRef, {
            username: username,
            score: 0,
            timestamp: new Date(),
          });
          console.log("✅ Score document created");
        } else {
          console.log("ℹ️ User already exists in scoreboard");
        }
      } catch (e) {
        console.error("❌ Firestore error:", e);
      }
    };

       checkAndAddScore();
  }, [username]);
  return (
    <div>
    </div>
  );
}
