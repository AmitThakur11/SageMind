
import quizData from "../../database";
import "./Home.css"
import { Link } from "react-router-dom";
import {  useQuiz } from "../../Context/QuizContext";
const Home = () => {
  const { dispatch } = useQuiz();
  (()=>{
    return dispatch({type : "RESET" , payload : {}})
  })()

  return (
    <section className ="home-section">
      {/* <div className = "title">QUIZ</div> */}
      <div className ="home-sub-section">
        {quizData.map((quiz) => {
          return (
            <Link to={`/quizinfo/${quiz.id}`}>
            <section className ="quiz-picker"
              key={quiz.id}
              onClick={() =>
                dispatch({ type: "SELECT QUIZ", payload: { id : quiz.id } })
              }
            >
              <Link to={`/quizinfo/${quiz.id}`}>
              <img src={quiz.quizCover} alt="" />
              <div className ="quiz-name">{quiz.quizName}</div></Link>
            </section>
            </Link>
          );
        })}
      </div>
    </section>
    
  );
};

export default Home;
