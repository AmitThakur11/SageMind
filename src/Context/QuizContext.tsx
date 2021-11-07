import { useContext, createContext, useReducer, ReactNode } from "react";
import quizData from "../database";

import { InitialState, Dispatch, Action, QuizData } from "../Types/QuizType";
export const quizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch;
}>({} as { state: InitialState; dispatch: Dispatch });

export const initialState: InitialState = {
  quiz_id: 0,
  questionsAnswered: [],
  score: 0,
  current: 0,
};

export const reducer = (state: InitialState, action: Action): InitialState => {
  const { id, answer, quizAnswer } = action.payload;
  switch (action.type) {
    case "SELECT QUIZ": {
      const findQuiz = quizData.find((quiz) => quiz.id === id) as QuizData;
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
              rightValue : quizAnswer?.rightValue
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
            rightValue: quizAnswer?.rightValue
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

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <quizContext.Provider value={{ state, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(quizContext);
};

export default QuizProvider;
