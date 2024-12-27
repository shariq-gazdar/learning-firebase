import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKO24DHPlG4pbFVjCxGrt2d22mOD6klq8",
  authDomain: "learning-firebase-545c9.firebaseapp.com",
  projectId: "learning-firebase-545c9",
  storageBucket: "learning-firebase-545c9.firebasestorage.app",
  messagingSenderId: "807552782270",
  appId: "1:807552782270:web:1a093e01fb01d0f56673ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
