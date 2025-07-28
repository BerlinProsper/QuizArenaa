import { useEffect, useRef } from "react";
import MyScore from "../ScoreBoard/myscore";
import { useMyContext } from "../../context/Mycontexts";
import Nowquiz from "./nowquiz";
import PQueue from "p-queue";
import axios from "axios";
import * as data from "../Questtions/quest";
import { useNavigate } from "react-router-dom";
import Loading from "../LoadingPage/index";
import SplitText from "../overlays/level";
import '../overlays/level.css';
import './Nowquiz.css';
import '../overlays/level.css';
import CountdownTimer from "../overlays/countdown";
import CircularTimer from "../overlays/countdown";
export default function GameSpace() {
   const navigate = useNavigate();
  const { selectedItems, setAllQuestions, difficulty, allQuestions, level, setShowLevel, showLevel, myNowScore, myScore, highScore , limit, nextTimer} = useMyContext();
 const hasRun = useRef(false)
 console.log("timer"+ limit);
 
  useEffect(() => {
    if (hasRun.current) return;
  hasRun.current = true;
  selectedItems.forEach((item) => {
      console.log("inside looped selectitems", item);
      const category = difficulty + item.id;
      console.log("inside looped selectitems", category);
      console.log("data[category]", data[category]);
    if (Array.isArray(data[category])) {
      setAllQuestions(prev => [...prev, ...data[category]]);
      console.log("data [category]", data[category]+" added to quest ig");
      
    }console.log("allQuestions", allQuestions);
    
  });


  const navigationEntries = performance.getEntriesByType("navigation");
  const isReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";



  if (selectedItems.length === 0) {
    navigate("/", { replace: true });
  }
}, [difficulty, selectedItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLevel(false);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [level]);
  return (
    <div style={styles.container}>
      <MyScore /> 
 
 <div style={styles.rowContainer}>
      <SplitText
        key={`level-${level}`}
        text={`Level - ${level}`}
        className="level-text"
        delay={0}
        duration={0}
        ease="power3.out"
        splitType="chars"
        
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
      />
      {
        level > 1 ?  <span><CircularTimer limit={limit} key={nextTimer}/> </span >
        : <span></span>
      }
        <span>
        <div style={styles.scoreText}>Highest in Game: {highScore}</div>
        <div style={styles.scoreText1}>Your Best Score: {myScore}</div>
        <div style={styles.scoreText2}>Score: {myNowScore}</div>
        </span>
      </div>
      {allQuestions.length > 0 ? <Nowquiz /> :<span></span>}
    
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #9fc0e1ff 0%, #026468ff 100%)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // pushes left and right
    alignItems: "center",
    padding: "20px 20px", // adjust spacing
    position: "relative", // allows absolute positioning inside if needed
  },
  scoreText: {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#9fc0e1ff",
  whiteSpace: "nowrap",
  textShadow: `
    -1px -1px 0 #026468ff,  
    1px -1px 0 #026468ff,
    -1px 1px 0 #026468ff,
    1px 1px 0 #026468ff
  `,
},
scoreText1: {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#9fc0e1ff",
  whiteSpace: "nowrap",
  textShadow: `
    -1px -1px 0 #026468ff,  
    1px -1px 0 #026468ff,
    -1px 1px 0 #026468ff,
    1px 1px 0 #026468ff
  `,
}, scoreText2: {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#9fc0e1ff",
  whiteSpace: "nowrap",
  textShadow: `
    -1px -1px 0 #026468ff,  
    1px -1px 0 #026468ff,
    -1px 1px 0 #026468ff,
    1px 1px 0 #026468ff
  `,
},




};
