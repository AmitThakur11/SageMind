
import "./Home.css"
import { Link } from "react-router-dom";
import {  useQuiz } from "../../Context/QuizContext";
const Home = () => {
  const { dispatch ,quizes , loading} = useQuiz();
  (()=>{
    return dispatch({type : "RESET" , payload : {}})
  })()
  console.log(loading)

  return (
    <section className ="home-section">
      <div className ="home-sub-section">
        {!loading &&  quizes.quizData.map((quiz) => {
          return (
            <Link to={`/quizinfo/${quiz.id}`} key ={quiz.id}>
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
