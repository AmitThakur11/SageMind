import React, { useState } from "react";
import "./Login.css";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import AuthCover from "../../media/auth.png";

const Login = () => {
  return (
    <>
      <div className="authContainer">
        <div className="authBox">
          <form className="authForm">
            <div className="inputBox">
              <input name="email" />
              <div className="password">
                <input placeholder="Password" name="password" />{" "}
                <span>
                  <IoEyeOutline />
                </span>
              </div>
            </div>
            <div className="btnContainer">
              <button type="submit">Login</button>
              <button type="submit">Demo</button>
            </div>
            <p className="authBox__footer">
              New here? <span>Click here</span>
            </p>
          </form>
        </div>
        <img src={AuthCover} alt="auth" />
      </div>
    </>
  );
};

export default Login;
