import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG1oE4ppyIQ8KC42LBJqoQ_dN5-0SGhpE",
  authDomain: "ours-doctors.firebaseapp.com",
  projectId: "ours-doctors",
  storageBucket: "ours-doctors.firebasestorage.app",
  messagingSenderId: "869491488585",
  appId: "1:869491488585:web:1e2fefc11174bc2e2ecc98",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
