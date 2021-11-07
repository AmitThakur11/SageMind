import "./style.css";
import React from "react";
import { Quiz } from "../../Types/QuizType";
import { FaRegTimesCircle} from "react-icons/fa";

export type UserResponseProps = {
    quiz :Quiz[],
    setResponse(value : boolean) :void

}

export const UserResponse:React.FC<UserResponseProps> =({quiz , setResponse})=>{
  
  return (
    <div className="UserResult">
       <div className  ="responseBox">
          <h1>Response</h1>
          <button onClick ={()=>setResponse(false)}><FaRegTimesCircle/></button>
          <div className ="response">
            {
              quiz.map(({question,options})=>{
                return <>
                <div className ="responseCard">
                <div className ="question">{question}</div>
                <div>{options.map((option)=>{
                  return(<>
                    {option.isRight&& <div className ="rightOption">{option.option}</div>}
                    </>
                  )
                })}</div>
                </div>
                </>
              })
            }

          </div>
        </div>

      
    </div>
  );
}
