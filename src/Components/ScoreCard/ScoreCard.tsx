import React , {useState} from "react";
import "./ScoreCard.css"
import { useQuiz } from "../../Context/QuizContext";
// import quizData from "../../database";
import { Quiz } from "../../Types/QuizType";
import { useNavigate } from "react-router";
import { UserResponse } from "../UserResult/UserResult";




type ScoreCardProps = {
  cal_score(score: number): number;
  quiz : Quiz[],
  quizId : string
};
const ScoreCard: React.FC<ScoreCardProps> = ({ cal_score , quiz  , quizId }) => {
  const { state ,dispatch ,saveResult } = useQuiz();
  const navigate = useNavigate()
  const [showResponse , setResponse] = useState<boolean>(false);


  
  return (
    <div>
      {
    !showResponse ? <div className="score-card">
      <div className="score-img">
        {cal_score(state.score) >= 0 && cal_score(state.score) <= 20 && (
          <>
            <img src="https://i.ibb.co/QK65KvF/002-hurt.png" alt="/" />
            <div className="score-msg">Don't be a minimum guy !</div>
          </>
        )}
        {cal_score(state.score) > 20 && cal_score(state.score) <= 40 && (
          <>
            <img src="https://i.ibb.co/c2SpZkM/001-emoji.png" alt="/" />
            <div className="score-msg"> put some effort man ! </div>
          </>
        )}
        {cal_score(state.score) > 40 && cal_score(state.score) <= 60 && (
          <>
            <img src="https://i.ibb.co/vdYjz5P/004-excited.png" alt="/" />
            <div className="score-msg">Average is not good</div>
          </>
        )}
        {cal_score(state.score) > 60 && cal_score(state.score) <= 80 && (
          <>
            <img src="https://i.ibb.co/Ms5gZfj/005-thumbs-up.png" alt="/" />
            <div className="score-msg">You're close , great job </div>
          </>
        )}
        {cal_score(state.score) > 80 && cal_score(state.score) <= 100 && (
          <>
            <img src="https://i.ibb.co/cFjKjRQ/003-ninja.png" alt="/" />
            <div className="score-msg">well done , you are awesome </div>
          </>
        )}
      </div>
      <div className="score">
        Score : {state.score}/{quiz.length * 10}
      </div>
      <div className="score-btn">
        <button className="btn-1" onClick ={()=>{setResponse((res)=>!res)}}>Answers</button>
        <button className="btn-1" onClick = {()=>{
        
        saveResult(quizId)}}>Save</button>
        <button className="btn-2" onClick = {()=>{
          dispatch({type : "RESET",payload:{}})
          navigate("/")
        }}>Cancel</button>
      </div>
      <img
        className="current-question"
        src="https://i.ibb.co/cFjKjRQ/003-ninja.png"
        alt="/"
      />
    </div> : (<UserResponse quiz={quiz} setResponse ={setResponse}/>)}

    </div>
  );
};

export default ScoreCard;
