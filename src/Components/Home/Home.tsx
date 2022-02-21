
import "./Home.css"
import { Link } from "react-router-dom";
import {  useQuiz } from "../../Context/QuizContext";
import Loader from "../Loader/Loader";
const Home = () => {
  const { dispatch ,quizes , loading} = useQuiz();

  (()=>{
    return dispatch({type : "RESET" , payload : {}})
  })()

  return (
    <section className ="home-section">
      <div className ="home-sub-section">
        {loading && <Loader/>}
        {!loading &&  quizes.quizData.map((quiz) => {
          return (
            <Link to={`/quizinfo/${quiz._id}`} key ={quiz._id}>
            <section className ="quiz-picker"
              key={quiz._id}
              onClick={() =>
                dispatch({ type: "SELECT QUIZ", payload: { _id : quiz._id } })
              }
            >
              <Link to={`/quizinfo/${quiz._id}`}>
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
