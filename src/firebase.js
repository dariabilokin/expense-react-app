// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_FIREBASE_KEY,
  authDomain: "expenses-51797.firebaseapp.com",
  projectId: "expenses-51797",
  storageBucket: "expenses-51797.appspot.com",
  messagingSenderId: "939202130155",
  appId: "1:939202130155:web:3deaf840faf085fd5aceae",
  measurementId: "G-JFEH90J3B3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
