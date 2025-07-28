import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
      
    const [user, setUser] = useState(null);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [allQuestions, setAllQuestions] = useState([]);


    const [categoriesData, setCategoriesData] = useState([{"id":"Sports", "name":"Sports"  }, {"id":"MovieShows", "name":"Movies & Shows" }, {"id":"GK", "name":"General Knowledge" }, {"id":"Science", "name":"Science" }, {"id":"History", "name":"History" }, {"id":"Geography", "name":"Geography" }, {"id":"Cars", "name":"Cars" }, {"id":"Animals", "name":"Animals" }, {"id":"Music", "name":"Music" }, {"id":"Politics", "name":"Politics" }, {"id":"Technology", "name":"Technology" }]);
    const [popUp, setPopUp] = useState(false);
    const [difficulty, setDifficulty] = useState('Easy');
    
  const [selectedItems, setSelectedItems] = useState([]);
  const [noItems, setNoItems] = useState(0);


  const [myScore, setMyScore] = useState(0);
  const [myNowScore, setMyNowScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [level, setLevel] = useState(1);
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(0); 
  const [showLevel, setShowLevel] = useState(true);

  const [nextTimer, setNextTimer] = useState(Date.now());
    const contextValue = {
      user,
        setUser,
    
        username,
        setUsername,
        password,
        setPassword,
        alert,
        setAlert,
        isLogin,
        setIsLogin,
        categoriesData,
        setCategoriesData,
        popUp,
        setPopUp,
        allQuestions,
        setAllQuestions,
        difficulty,
        setDifficulty,
        selectedItems,
        setSelectedItems,
        noItems,
        setNoItems,
        myScore,
        setMyScore,
        myNowScore,
        setMyNowScore,
        level,
        setLevel,
        count,
        setCount,
       setShowLevel,
         showLevel,
         highScore,
         setHighScore,
         limit,
         setLimit,
         nextTimer,
         setNextTimer
  };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
export const useMyContext = () => useContext(MyContext);




