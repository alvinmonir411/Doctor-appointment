import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router";
import { auth } from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const LogIn = () => {
  const Login = (e) => {
    e.preventDefault();
    const Email = e.target.Email.value;
    const Password = e.target.Password.value;
    console.log(Email, Password);

    signInWithEmailAndPassword(auth, Email, Password)
      .then((result) => {
        console.log(result);
        if (emailVerified) {
          toast.success("Welcome Back");
        }
      })
      .catch((error) => {
        // alert(error);
        toast("please verifed your email");
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card p-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mb-10">Login now!</h1>

          <p>
            Not Have An Account?{" "}
            <NavLink className="underline text-blue-500" to="/SignUp">
              Sign Up
            </NavLink>
          </p>
          <div className="card-body">
            <form onSubmit={Login} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="Email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="Password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
