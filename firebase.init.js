// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1oE4ppyIQ8KC42LBJqoQ_dN5-0SGhpE",
  authDomain: "ours-doctors.firebaseapp.com",
  projectId: "ours-doctors",
  storageBucket: "ours-doctors.firebasestorage.app",
  messagingSenderId: "869491488585",
  appId: "1:869491488585:web:1e2fefc11174bc2e2ecc98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
