import React from "react";
import "./Sign.css";
import logo from "../../Assets/SSlogo.png";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignIn = () => {
  return (
    <>
      <img className="signlogo" src={logo} />
      <div className="SignIn">
        <div className="signInbox">
          <div className="layer1">
            <div className="signIn_logo">
              <img src={logo} />
            </div>
            <span className="welcome">Welcomes You</span>
          </div>
          <div className="layer2">
            <button id="signInbtn" className="btn">
              Sign In
            </button>
            <button id="signUpbtn" className="btn">
              Sign Up
            </button>
          </div>
          <div className="userlogo">
              <AccountCircleIcon sx={{ borderRadius:'100rem', bgcolor:"white", height: "5rem", width: "5rem" }} />
            </div>
          <div className="layer3">
            <div className="Userbox">
                <div className="text1" id="text">
                    <span></span>
                   <input placeholder="User Id"/>
                </div>
                <div className="text1">
                <span></span>
                    <input placeholder="Password"/>
                </div>
                <div className="signbtn">
                    <button>Sign In</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;