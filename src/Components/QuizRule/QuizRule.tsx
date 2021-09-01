import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {rules} from "../../database";
import "./QuizRule.css"

const QuizRule = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="instruction">
      <div className="instruction-box">
        <div className="rules-title">INSTRUCIONS</div>
        <ul className="rules-section">
          {rules.map((rule) => {
            return <li className="rule">{rule}</li>;
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
