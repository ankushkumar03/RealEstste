// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-7b0a9.firebaseapp.com",
  projectId: "estate-7b0a9",
  storageBucket: "estate-7b0a9.firebasestorage.app",
  messagingSenderId: "336285939061",
  appId: "1:336285939061:web:bfea6c9e614d23b5104f3c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);