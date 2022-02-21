import React, { useState } from "react";
// IoEyeOffOutline
import "./Signup.css"
import { IoEyeOutline } from "react-icons/io5";
import AuthCover from "../../media/auth.png";
import { useAuth } from "../../Context/AuthContext";
import { InputType ,InputEventType,ButtonEventType} from "../../Types/AuthType";



const SignUp = () => {
  const [input,setInput] = useState({username : "",email : "", password : "" , cpassword : ""})
  const {register} = useAuth()
  const getInput = (e:InputEventType):void=>{
    const {name ,value} = e.target;
    setInput((input)=>{
      return {...input,[name] : value}
    })
  }

  const registerAction = (e:ButtonEventType,input : InputType):void=>{
    e.preventDefault();
    register(input)


  }
  return (
    <>
    <div className="authContainer">
      <div className="authBox">
        <form className="authForm">
          <div className="inputBox">
            <input name="username" placeholder="username" value = {input.username} onChange ={(e)=>getInput(e)} />
            <input name="email" placeholder="Email" value = {input.email} onChange ={(e)=>getInput(e)}/>
            <div className="password">
              <input
                type= "password"
                name="password"
                placeholder="password"
                value = {input.password} onChange ={(e)=>getInput(e)}

              />{" "}
              <span>
                <IoEyeOutline />
              </span>
            </div>
            <div className="password">
              <input
             
                name="cpassword"
                
                placeholder="confirm password"
                value = {input.cpassword} onChange ={(e)=>getInput(e)}
             
              />{" "}
              <span >
                <IoEyeOutline />
              </span>
            </div>
          </div>

          <div className="btnContainer">
            <button type="submit" onClick={(e)=>registerAction(e,input)} >Register</button>
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
