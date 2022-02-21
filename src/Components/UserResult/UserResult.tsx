import "./style.css";
import React from "react";
import { Quiz } from "../../Types/QuizType";
import { FaRegTimesCircle} from "react-icons/fa";
import { useQuiz } from "../../Context/QuizContext";

export type UserResponseProps = {
    quiz :Quiz[],
    setResponse(value : boolean) :void

}

export const UserResponse:React.FC<UserResponseProps> =({quiz , setResponse})=>{

  const {state : {questionsAnswered}} = useQuiz()
  
  return (
    <div className="UserResult">
       <div className  ="responseBox">
          <h1>Response</h1>
          <button className="abortBtn" onClick ={()=>setResponse(false)}><FaRegTimesCircle/></button>
          <div className ="response">
            {
              questionsAnswered.map(({question,rightValue,chosenValue, yourChoice})=>{
                return <>
                <div className ="responseCard">
                <div className ="question">{question}</div>
                {!yourChoice && <div className ="wrongChoice">{chosenValue}</div>}
                <div className ="rightOption">{rightValue}</div>
                </div>
                </>
              })
            }

          </div>
        </div>

      
    </div>
  );
}
