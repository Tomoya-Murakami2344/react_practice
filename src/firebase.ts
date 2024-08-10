// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyA5eip6FNh7jrsTH1izrsEvQLLMeLiXwIQ",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-practice-b3cc5.firebaseapp.com",
  projectId: "react-practice-b3cc5",
  storageBucket: "react-practice-b3cc5.appspot.com",
  messagingSenderId: "871027500381",
  // appId: "1:871027500381:web:146d415a41753d925f34b4",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-Z8H8GY2ZZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
