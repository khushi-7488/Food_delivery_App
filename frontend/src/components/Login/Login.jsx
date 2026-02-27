import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container" action="">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin()} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>by continuing, i agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            create a new account ? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
