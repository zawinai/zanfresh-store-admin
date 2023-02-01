import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API,
  authDomain: process.env.ADM,
  projectId: process.env.PID,
  storageBucket: process.env.BUC,
  messagingSenderId: process.env.MSGID,
  appId: process.env.APP,
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
