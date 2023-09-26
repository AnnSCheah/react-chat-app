// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWuiJsLto61Ie9bbRIRpvQiTMDJt_C4j0",
  authDomain: "react-chat-c4243.firebaseapp.com",
  projectId: "react-chat-c4243",
  storageBucket: "react-chat-c4243.appspot.com",
  messagingSenderId: "665108845143",
  appId: "1:665108845143:web:f7ae5929b3d350036e8912"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();