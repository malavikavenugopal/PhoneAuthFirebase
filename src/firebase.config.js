// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB2Do5TRsTLQNvg_y-sCwA6Rm4hU1zcns",
  authDomain: "heroscoop-a628b.firebaseapp.com",
  projectId: "heroscoop-a628b",
  storageBucket: "heroscoop-a628b.firebasestorage.app",
  messagingSenderId: "661021176654",
  appId: "1:661021176654:web:a0113060822ee14650241f",
  measurementId: "G-564Q4F1CCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
