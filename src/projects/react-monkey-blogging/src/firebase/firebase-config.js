// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJdqkG3iqx7wp9A3ppzS790-kyqWAnlOo",
  authDomain: "monkey-blogging-d1815.firebaseapp.com",
  projectId: "monkey-blogging-d1815",
  storageBucket: "monkey-blogging-d1815.appspot.com",
  messagingSenderId: "1004863159428",
  appId: "1:1004863159428:web:38c09b46f9b903281e16d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
