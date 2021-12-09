import { useQuiz } from "../../Context/QuizContext";
import "./QuizResponse.css";

const QuizResponse = () => {
  const { state } = useQuiz();
  return (
    <section className="quiz-response">
      {state.questionsAnswered.map((response) => {
        return (
          <section className="response">
            <div>{response.question}</div>
            <div>{response.chosenValue}</div>
          </section>
        );
      })}
    </section>
  );
};

export default QuizResponse;
