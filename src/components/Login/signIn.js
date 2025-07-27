import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useState } from "react";
export const HandleSignIn = async (username,password , setAlert, alert, setIsLogin, isLogin) => {
    console.log("--------------"+ username  + password);
    
  try {
    await signInWithEmailAndPassword(auth, username, password);
    console.log('User signed in!')
    setIsLogin(true);
setAlert('');
  } catch (error) {
    console.error(error.message);
     if (error.code === 'auth/invalid-credential') {
      setAlert('Incorrect password/email. Please try again.');
    }else if(isLogin){
      setAlert('')
    } else {
      setAlert('An error occurred during sign in. Please try again later.');
    }   
  }
};
