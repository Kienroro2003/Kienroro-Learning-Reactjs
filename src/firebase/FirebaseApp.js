import React from "react";
import { collection } from "firebase/firestore";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const posts = collection(db, "posts");
  console.log(posts);
  return <div></div>;
};

export default FirebaseApp;
