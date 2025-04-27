import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "./../../firebase.init";
import button from "daisyui/components/button";

const SignUp = () => {
  const HandleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className="bg-white" onClick={HandleSignIn}>
      sign in
    </button>
  );
};

export default SignUp;
