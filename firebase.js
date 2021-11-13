// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQHYM-FQiWxDLUDH1CeQMxhJeveKXaa0",
  authDomain: "instagram-2-nextjs.firebaseapp.com",
  projectId: "instagram-2-nextjs",
  storageBucket: "instagram-2-nextjs.appspot.com",
  messagingSenderId: "1035569844046",
  appId: "1:1035569844046:web:6ae063b776db650e44181f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
