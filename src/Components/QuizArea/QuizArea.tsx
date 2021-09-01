import { useParams } from "react-router";
import { useQuiz } from "../../Context/QuizContext";
import { useState, useEffect } from "react";
import "./QuizArea.css"
import quizData from "../../database";
import { QuizData } from "../../Types/QuizType";
import ScoreCard from "../ScoreCard/ScoreCard";
import { uuid } from "uuidv4";
const QuizArea = () => {
  const { id } = useParams();
  const { dispatch } = useQuiz();
  const [current1, setCurrent1] = useState(0);
  const [timer, setTimer] = useState(15);
  const chosenQuiz = quizData.find(
    (quiz) => quiz.id === parseInt(id, 10)
  ) as QuizData;
  const { quiz } = chosenQuiz;

  
  const nextQuestion = () => {
    setCurrent1(current1 + 1);
    if (current1 < quiz.length - 1) {
      setTimer(15);
    }
  };

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
    if (timer === 0) {
      nextQuestion();
    }
    return () => clearInterval(time as number);
  },[timer]);

  return (
    <section className="quiz-section">
      {quiz.length > current1 ? (
        <div className="quiz-card">
          <div className="current-question">{current1 + 1}/5</div>

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
              {quiz[current1].options.map(({ option, isRight }) => {
                return ( 
                  <li key = {uuid()}
                    onClick={() => {
                      dispatch({
                        type: "SELECT ANSWER",
                        payload: {
                          answer: isRight,
                          quizAnswer: {
                            question: quiz[current1].question,
                            chosenValue: option
                          }
                        }
                      });
                      nextQuestion();
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
        <ScoreCard cal_score={CalculateScore} />
      )}
    </section>
  );
};
export default QuizArea;
