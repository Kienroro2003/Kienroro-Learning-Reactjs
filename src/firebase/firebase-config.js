// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNdpE8sfulbrw4c_DIxz9gAe4RyGgGEG8",
  authDomain: "learn-firebase-c8eb5.firebaseapp.com",
  projectId: "learn-firebase-c8eb5",
  storageBucket: "learn-firebase-c8eb5.appspot.com",
  messagingSenderId: "479369031382",
  appId: "1:479369031382:web:f4f83118705211569c2377",
  measurementId: "G-1ZGR1MEG2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
