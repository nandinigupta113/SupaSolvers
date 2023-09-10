import React, { useEffect, useState } from "react";
import "./Sign.css";
import logo from "../../Assets/SSlogo.png";
import SignIncomp from "../../Components/Signpage/SignIn/SignIncomp";
import Signupcomp from "../../Components/Signpage/SignUp/Signupcomp";
const Sign = () => {
  const [choice, setChoice] = useState("SignIn");
  return (
    <>
      <img className="signlogo" src={logo} alt=""/>
      <div className="SignIn">
        <div className="signInbox">
          <div className="layer1">
            <div className="signIn_logo">
              <img src={logo} alt=""/>
            </div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2">
            <button
              onClick={(e) => setChoice(e.target.value)}
              className={choice === "SignIn" ? "selectsignbtn" : "btn"}
              value="SignIn"
            >
              Sign In
            </button>
            <button
              onClick={(e) => setChoice(e.target.value)}
              className={choice === "SignUp" ? "selectsignbtn" : "btn"}
              value="SignUp"
            >
              Sign Up
            </button>
          </div>

          <>{choice === "SignIn" ? <SignIncomp /> : <Signupcomp />}</>
        </div>
      </div>
    </>
  );
};

export default Sign;
