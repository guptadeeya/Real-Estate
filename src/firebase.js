// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-8ddd5.firebaseapp.com",
  projectId: "real-estate-8ddd5",
  storageBucket: "real-estate-8ddd5.appspot.com",
  messagingSenderId: "512304430699",
  appId: "1:512304430699:web:ea0a49488802516dd8bb2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);