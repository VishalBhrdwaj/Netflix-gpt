import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PROFILE_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" flex justify-between absolute w-screen z-10 px-8 pt-1 bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="banner" />

      <div className="flex">
        <button
          onClick={handleGptSearchClick}
          className="bg-red-700 px-8 py-2 h-10 font-semibold mt-4 rounded-md text-white"
        >
          Search GPT
        </button>
        <img
          className="h-10 w-10 m-4 rounded-sm"
          alt="text"
          src={PROFILE_ICON}
        />
        <button
          onClick={handleSignOut}
          className="hover:bg-red-700 rounded-md text-white pl-5 pr-5 h-10 mt-4 border border-red-700"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
