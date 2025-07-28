import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import styled, { useTheme } from 'styled-components';
import LoginForm from "./components/Login/index.js";
import Home from "./components/Home/index.js";
import { useMyContext } from "./context/Mycontexts.js";
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import LoadingPage from "./components/LoadingPage/index.js";
import Categories from "./components/Categories/index.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameSpace from "./components/GameSpace/index.js";
import { AddRounded } from "@mui/icons-material";
import Congratulations from "./components/overlays/Congratulations.js";
import Profile from "./components/Profile/Profile.js";
import Guide from "./components/Guide/guide.js";
import MyScore from "./components/ScoreBoard/myscore.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {

   const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const { isLogin,setIsLogin, setUsername, user, setUser , setAlert } = useMyContext();
const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(user.email)) {
      setUsername(user.email);
      setIsLogin(true);
      }
    } else {
      setUser(null);
      setIsLogin(false);
     
    }
    setLoading(false); 
  });

  return () => unsubscribe();
}, []);

  console.log("myusername", user  );
return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
<MyScore/>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <LoadingPage />
            ) : isLogin ? (
              <Home />
            ) : (
              <LoginForm />
            )
          }
        />
           <Route path="/profile" element={<Profile/>} />
        <Route path="/game" element={<GameSpace />} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/game" element={<GameSpace />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

}

export default App;




//score board and profile board.
//And Guid board about levels and how to play
//Add more category quetions
//Better Timer icon

