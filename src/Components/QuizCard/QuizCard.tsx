import { useState, useEffect } from "react";
import { useQuiz } from "../../Context/QuizContext"
import quizData from "../../database";
import { QuizData } from "../../Types/QuizType";
import { useParams } from "react-router-dom";
const QuizCard = () => {
  const [current1, setCurrent1] = useState(0);
  const [timer, setTimer] = useState(15);
  const { id } = useParams();
  const { state, dispatch } = useQuiz();

  const chosenQuiz = quizData.find(
    (quiz) => quiz.id === parseInt(id, 10)
  ) as QuizData;
  const { quiz } = chosenQuiz;
   

  type Next = ()=>void
  const next:Next = () => {
    setTimer(timer - 1);
  };
  const nextQuestion = () => {
    setCurrent1(current1 + 1);
    if (current1 < quiz.length - 1) {
      setTimer(15);
    }
  };

  useEffect(() => {
    let time : number|boolean =
      timer >= 1 && (window.setTimeout(() => next(), 1000)) ;
    if (timer === 0) {
      nextQuestion();
    }
    return () => clearInterval(time as number);
  }, [timer]);
  return (
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
              <li
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
  );
};

export default QuizCard;
