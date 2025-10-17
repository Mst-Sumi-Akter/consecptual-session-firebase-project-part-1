// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD03shT4smSCRaRaT87NQnz2oLqzAqhBp0",
  authDomain: "fir-project-part-1-7e6dc.firebaseapp.com",
  projectId: "fir-project-part-1-7e6dc",
  storageBucket: "fir-project-part-1-7e6dc.firebasestorage.app",
  messagingSenderId: "940874096985",
  appId: "1:940874096985:web:78b116864e059240b7ac48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);