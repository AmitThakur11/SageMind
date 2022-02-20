import {
  useContext,
  createContext,
  useReducer,
  ReactNode,
  useState,
} from "react";

import {
  InitialState,
  Dispatch,
  Action,
  QuizData,
  Quizes,
} from "../Types/QuizType";
export const quizContext = createContext(
  {} as {
    state: InitialState;
    dispatch: Dispatch;
    quizes: Quizes;
    loading: boolean;
    setLoading : (loading : boolean)=> void
    setQuizes : (quizes : Quizes)=>void
  }
);

export const initialState: InitialState = {
  quiz_id: 0,
  questionsAnswered: [],
  score: 0,
  current: 0,
};

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizes, setQuizes] = useState({} as Quizes);
  const [loading, setLoading] = useState<boolean>(true);
  const reducer = (state: InitialState, action: Action): InitialState => {
    const { id, answer, quizAnswer } = action.payload;
    switch (action.type) {
      case "SELECT QUIZ": {
        const findQuiz = quizes.quizData.find(
          (quiz) => quiz.id === id
        ) as QuizData;
        return { ...state, quiz_id: findQuiz.id as number };
      }
      case "SELECT ANSWER": {
        if (answer) {
          return {
            ...state,
            current: state.current + 1,
            score: state.score + 10,
            questionsAnswered: [
              ...state.questionsAnswered,
              {
                question: quizAnswer?.question,
                chosenValue: quizAnswer?.chosenValue,
                yourChoice: answer,
                rightValue: quizAnswer?.rightValue,
              },
            ],
          };
        }

        return {
          ...state,
          current: state.current + 1,
          questionsAnswered: [
            ...state.questionsAnswered,
            {
              question: quizAnswer?.question,
              chosenValue: quizAnswer?.chosenValue,
              yourChoice: answer,
              rightValue: quizAnswer?.rightValue,
            },
          ],
        };
      }

      case "RESET":
        return (state = initialState);

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <quizContext.Provider
      value={{ state, dispatch, quizes, loading, setLoading, setQuizes }}
    >
      {children}
    </quizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(quizContext);
};

export default QuizProvider;
