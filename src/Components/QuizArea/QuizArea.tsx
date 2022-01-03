import { useParams } from "react-router";
import { useQuiz } from "../../Context/QuizContext";
import { useState, useEffect } from "react";
import "./QuizArea.css"
import { QuizData ,Quiz,Quizes,QuizAxiosType} from "../../Types/QuizType";
import axios ,{AxiosError} from "axios"
import ScoreCard from "../ScoreCard/ScoreCard";
const QuizArea = () => {
  const { id } = useParams();
  const { dispatch ,quizes , loading ,setLoading} = useQuiz();
  const [current1, setCurrent1] = useState(0);
  const [quiz,setQuiz] = useState([] as Quiz[]);

  const [count,setCount]=useState(0)
  const [timer, setTimer] = useState(15); 
  

 
  
  
  const nextQuestion = (quiz:Quiz[]) => {
    setCount((count)=>count+1)
    setCurrent1(current1 + 1);
    if (current1 < quiz.length - 1) {
      setTimer(15);
    }
  };

  if(timer === 0 && quiz.length > current1) {
    setCount((count)=>count+1)
    setCurrent1((current)=>current + 1);
    if (current1 < quiz.length - 1) {
    setTimer(15);
  }
  }
  
  const CalculateScore = (score: number) => {
    const dividend = (score / quiz.length) * 10;
    return dividend;
  };


  
  
  useEffect(() => {

    let time =
      timer >= 1 && (window.setTimeout(() => next(), 1000) as number);

      const next = () => {
        setTimer(timer - 1);
      }; 
    
    return () => clearInterval(time as number);
  },[timer]);


  useEffect(()=>{
    (async()=>{
      try{
      setLoading(true)
      const response = await axios.get<QuizAxiosType>("http://localhost:5000/quiz");
      const chosenQuiz = response.data.quizes.quizData.find(
            (quiz) => quiz.id === parseInt(id, 10)
          ) as QuizData;
      setQuiz(chosenQuiz.quiz)
      setLoading(false)
    }catch(error){
      if(axios.isAxiosError(error)){
        const serverError = error as AxiosError<{msg :String}>
        console.log(serverError)
      }
      console.log(error)

    }})()
        
  }, [setLoading,setQuiz])
  return (
    <>
    {!loading && <section className="quiz-section">
      {quiz.length > current1  ? (
        <div className="quiz-card">
          <div className="current-question">{current1 + 1}/{quiz.length}</div>

          <div className="timer-section">
            <img
              className="timer"
              src="https://i.ibb.co/6Rz1L78/002-sand-timer.png"
              alt="/"
            />
            {timer < 10 ? 0 : ""}
            {timer} Sec
          </div>

          <div className="quiz-question">{quiz[current1].question}</div>
          <div className="quiz-options">
            <ol>
              {quiz[count].options.map(({ option, isRight }) => {
                return ( 
                  <li key = {option}
                    onClick={() => {
                      const findRight = (count: number)=>quiz[count].options?.find(({isRight})=>isRight === true)?.option;
                      dispatch({
                        type: "SELECT ANSWER",
                        payload: {
                          answer: isRight,
                          quizAnswer: {
                            rightValue : findRight(count),
                            question: quiz[current1].question,
                            chosenValue: option
                           
                          }
                        }
                      });
                      nextQuestion(quiz);
                    }}
                  >
                    {option}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      ) : (
        <div>
         <ScoreCard cal_score ={CalculateScore} quiz ={quiz} /> 
        </div>)
      }
    </section>
}
</>
  );
};
export default QuizArea;
