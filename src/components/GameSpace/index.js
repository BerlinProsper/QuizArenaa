import { useState, useEffect } from "react";
import MyScore from "../ScoreBoard/myscore";
import { useMyContext } from "../../context/Mycontexts";
import { AllInbox } from "@mui/icons-material";
import Nowquiz from "./nowquiz";



export default function GameSpace() {
  const {selectedItems , setAllQuestions, difficulty , allQuestions, noItems } = useMyContext();

  console.log("selectedItems in GameSpace", selectedItems );
useEffect(() => {
  
 
   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



  fetchTrivia();
}, []); // include dependencies here


const fetchTrivia = async () => {
  try {
    const questions = [];


      const response = await fetch(
        `https://opentdb.com/api.php?amount=8&category=${selectedItems[noItems-1].id}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();
 
      if (data.response_code === 0) {
        questions.push(...data.results);

setAllQuestions((prevQuestions) => [...prevQuestions, ...data.results]);

      }
    console.log("Fetched questions:", questions);
    console.log(questions);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
  return (
      <div style={styles.container}>
     <MyScore />{
      allQuestions.length > 0 ? (
   <Nowquiz onQuizEnd={fetchTrivia} />
      ) : (
        <p>Loading questions...</p>
      )}
     
        <h1>Categories</h1>
      </div>
  );
}

 
 const styles = {

  container: {
    background: 'linear-gradient(135deg, #9fc0e1ff 0%, #026468ff 100%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },  

}