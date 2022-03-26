import React, { useState } from "react";
// IoEyeOffOutline
import "./Signup.css"
import { IoEyeOutline,IoEyeOffOutline} from "react-icons/io5";
import AuthCover from "../../media/auth.png";
import { useAuth } from "../../Context/AuthContext";
import { InputType ,InputEventType,ButtonEventType} from "../../Types/AuthType";
import { useNavigate } from "react-router";



const SignUp = () => {
  const [input,setInput] = useState({username : "",email : "", password : "" , cpassword : ""})
  const [showPassword,setShowPassword] = useState("")
  const {register} = useAuth()
  const navigate = useNavigate()
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

  const showPass = (name:string):void=>{
    let val = showPassword === name ? "" : name
    setShowPassword(val)
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
                type= {showPassword === "password" ? "text":"password"}
                name="password"
                placeholder="password"
                value = {input.password} onChange ={(e)=>getInput(e)}

              />{" "}
              <span onClick={()=>showPass("password")}>
              {showPassword === "password" ?<IoEyeOffOutline />:<IoEyeOutline/>}
              </span>
            </div>
            <div className="password">
              <input
             
                name="cpassword"
                type ={showPassword === "cpassword" ? "text":"password"}
                placeholder="confirm password"
                value = {input.cpassword} onChange ={(e)=>getInput(e)}
             
              />{" "}
              <span onClick={()=>showPass("cpassword")} >
                {showPassword === "cpassword" ?<IoEyeOffOutline />:<IoEyeOutline/>}
              </span>
            </div>
          </div>

          <div className="btnContainer">
            <button type="submit" onClick={(e)=>registerAction(e,input)} >Register</button>
          </div>
          <div className="authBox__footer">
            Already registered?{" "}
            <span onClick = {()=>navigate("/login")}>Log in</span>
          </div>
        </form>
      </div>
      <img src={AuthCover} alt="auth" />
    </div>
    </>
  );
};

export default SignUp;
