import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
      
    const [user, setUser] = useState(null);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [allQuestions, setAllQuestions] = useState([]);

    
    const [categoriesData, setCategoriesData] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [difficulty, setDifficulty] = useState('easy');
    
  const [selectedItems, setSelectedItems] = useState([]);
  const [noItems, setNoItems] = useState(0);
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
        setNoItems
  };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
export const useMyContext = () => useContext(MyContext);




