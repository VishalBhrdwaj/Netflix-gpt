import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const setToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message+"-"+isSignIn);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+"-"+errorMessage)
          // ..
        });
    } else {
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black p-12 absolute w-3/12 mx-auto right-0 left-0 mt-28 bg-opacity-75"
        >
          <h3 className="text-white font-medium text-4xl mb-3 mx-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h3>
          {!isSignIn && (
            <input
              className="p-2 m-2 opacity-100 bg-whte w-full"
              type="text"
              placeholder="FullName"
            />
          )}
          <input
            ref={email}
            className="p-2 m-2 opacity-100 bg-whte w-full"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            className="p-2 m-2  w-full"
            type="password"
            placeholder="Password"
          />
          <br></br>
          <p className="text-red-700">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="mb-8 mt-5 bg-red-600 m-2 px-20 py-2 rounded-md text-white w-full"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white">
            <span className="flex ">
              <input className="m-2" type="checkbox" />
              <label>Remember Me</label>
            </span>
            <span></span>
          </p>

          <p className="text-white m-2" onClick={setToggle}>
            New to Netflix? Sign up now.
            <br />
            <br></br>{" "}
            <span className="text-sm text-slate-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
