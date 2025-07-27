import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../../firebase'; // your config file
export const HandleSignUp = async (username, password , setAlert , setIsLogin, isLogin) => {
  try {
    await createUserWithEmailAndPassword(auth, username, password);
   setAlert('')
    setIsLogin(true);
  } catch (error) {
    setAlert(error.message);
     if (error.code === 'auth/weak-password') {
      setAlert('Weak password. Please choose a stronger password.');

    } else if (error.code === 'auth/email-already-in-use') {
      setAlert('Email already in use. Go to Sign-In.');
    }else if(isLogin){
      setAlert('')
    } else {
      setAlert('An error occurred during sign up. Please try again later.');
    }
  }
};
