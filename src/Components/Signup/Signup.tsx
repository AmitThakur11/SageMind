import React, { useState } from "react";
import "./Signup.css"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import AuthCover from "../../media/auth.png";

const SignUp = () => {
  return (
    <>
    <div className="authContainer">
      <div className="authBox">
        <form className="authForm">
          <div className="inputBox">
            <input name="username" placeholder="username" />
            <input name="email" placeholder="Email"/>
            <div className="password">
              <input
                type= "password"
                name="password"
                placeholder="password"
              />{" "}
              <span>
                <IoEyeOutline />
              </span>
            </div>
            <div className="password">
              <input
             
                name="cpassword"
                
                placeholder="confirm password"
             
              />{" "}
              <span >
                <IoEyeOutline />
              </span>
            </div>
          </div>

          <div className="btnContainer">
            <button type="submit" >Register</button>
          </div>
          <div className="authBox__footer">
            Already registered?{" "}
            <span>Log in</span>
          </div>
        </form>
      </div>
      <img src={AuthCover} alt="auth" />
    </div>
    </>
  );
};

export default SignUp;
