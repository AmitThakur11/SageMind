import React, { useState } from "react";
import { ResultType } from "../../Types/QuizType";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Profile.css"
export type ResultCardProps = {
  result: ResultType;
};

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const [show, setShow] = useState(false);
  console.log(result)
  return (
    <div className ="resultCard_container">
      <section className="resultCard">
        <img src={result.quiz.quizCover} alt="quiz cover" />
        <p>{result.quiz.quizName}</p>
        <button className="showBtn" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </section>
      {show && (
        <div className="UserResult">
          <div className="responseBox">
            <h1>Response</h1>
            <button className="abortBtn" onClick={() => setShow(false)}>
              <FaRegTimesCircle />
            </button>
            <div className="response">
              {result.result.map(({ question, rightValue, chosenValue }) => {
                return (
                  <>
                    <div className="responseCard">
                      <div className="question">{question}</div>
                      {chosenValue === rightValue && (
                        <div className="wrongChoice">{chosenValue}</div>
                      )}
                      <div className="rightOption">{rightValue}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
