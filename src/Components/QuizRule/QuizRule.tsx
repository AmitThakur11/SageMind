import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {rules} from "../../database";
import { useQuiz } from "../../Context/QuizContext";
import "./QuizRule.css"
import {v4 as uuid} from 'uuid';
import {useEffect} from 'react'


const QuizRule = () => {
  const { id } = useParams();
  const {dispatch} = useQuiz()
  useEffect(() => dispatch({type : "RESET" , payload : {}}), [dispatch])


  return (
    <section className="instruction">
      <div className="instruction-box">
        <div className="rules-title">INSTRUCIONS</div>
        <ul className="rules-section">
          {rules.map((rule) => {
            return <li key = {uuid()}className="rule">{rule}</li>;
          })}
        </ul>
        <div>
          <Link to={`/quiz/${id}`}>
            <div className="score-btn">
              <button className="btn-1">Lets Start</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuizRule;
