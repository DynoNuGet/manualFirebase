// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //
  apiKey: "AIzaSyAvDAxI3tmW-xxifArkamAl__cIx7aBVf8",
  authDomain: "loginfirebase-b023d.firebaseapp.com",
  projectId: "loginfirebase-b023d",
  storageBucket: "loginfirebase-b023d.firebasestorage.app",
  messagingSenderId: "141790874106",
  appId: "1:141790874106:web:61ba332033f020b8a57c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);