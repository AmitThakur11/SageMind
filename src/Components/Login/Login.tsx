// IoEyeOffOutline 
import React,{ useState } from "react";
import "./Login.css";
import { IoEyeOutline} from "react-icons/io5";
import AuthCover from "../../media/auth.png";
import { useAuth } from "../../Context/AuthContext";
import { InputType ,InputEventType,ButtonEventType } from "../../Types/AuthType";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router";

const Login = () => {

  const [input,setInput] = useState({email : "", password : ""})
  const {login,loading} = useAuth()
  const navigate = useNavigate()
  const getInput = (e:InputEventType):void=>{
    const {name ,value} = e.target;
    setInput((input)=>{
      return {...input,[name] : value}
    })
  }

  const loginAction = (e:ButtonEventType,input : InputType):void=>{
    e.preventDefault();
    login(input)
  }

  return (
    <>
    {loading && <Loader/>}
      {!loading && <div className="authContainer">
        <section className="authBox">
          <form className="authForm">
            <div className="inputBox">
              <input name="email" placeholder="Email" value = {input.email} onChange ={(e)=>getInput(e)}/>
              <div className="password">
                <input placeholder="Password" name="password" value = {input.password} onChange ={(e)=>getInput(e)} />{" "}
                <span>
                  <IoEyeOutline />
                </span>
              </div>
            </div>
            <div className="btnContainer">
              <button type="submit" onClick={(e)=>loginAction(e,input)}>Login</button>
              <button type="submit" onClick={(e)=>loginAction(e,{email: "test2@gmail.com" , password : "thakur@54321"})}>Demo</button>
            </div>
            <p className="authBox__footer">
              New here? <span onClick = {()=>navigate("/signup")}>Click here</span>
            </p>
          </form>
        </section>
        <img src={AuthCover} alt="auth" />
      </div>}
    </>
  );
};

export default Login;
