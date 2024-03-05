import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJdqkG3iqx7wp9A3ppzS790-kyqWAnlOo",
  authDomain: "monkey-blogging-d1815.firebaseapp.com",
  projectId: "monkey-blogging-d1815",
  storageBucket: "monkey-blogging-d1815.appspot.com",
  messagingSenderId: "1004863159428",
  appId: "1:1004863159428:web:38c09b46f9b903281e16d1",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
