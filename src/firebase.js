// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5OkG5fD79jNgfTkttU4UwWKAugCB9QQ",
  authDomain: "signup-893be.firebaseapp.com",
  projectId: "signup-893be",
  storageBucket: "signup-893be.firebasestorage.app",
  messagingSenderId: "506915897819",
  appId: "1:506915897819:web:aa39a14dd14f10ebefa7fe"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
