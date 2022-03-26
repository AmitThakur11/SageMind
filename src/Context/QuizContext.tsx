import {
  useContext,
  createContext,
  useReducer,
  ReactNode,
  useState,
} from "react";
import axios,{AxiosError} from 'axios';
import {
  InitialState,
  Dispatch,
  Action,
  Quizes,
} from "../Types/QuizType";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import {toast} from "react-toastify"
export const quizContext = createContext(
  {} as {
    state: InitialState;
    dispatch: Dispatch;
    quizes: Quizes;
    loading: boolean;
    setLoading : (loading : boolean)=> void;
    setQuizes : (quizes : Quizes)=>void;
    saveResult : (quizId : string)=>void
  }
);

export const initialState: InitialState = {
  quiz_id: "",
  questionsAnswered: [],
  score: 0,
  current: 0,
};

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizes, setQuizes] = useState({} as Quizes);
  const [loading, setLoading] = useState<boolean>(true);
  const {authState} = useAuth()
  const navigate = useNavigate()
  const reducer = (state: InitialState, action: Action): InitialState => {
    const { _id, answer, quizAnswer } = action.payload;
    switch (action.type) {
      case "SELECT QUIZ": {
        // const findQuiz = quizes.quizData.find(
        //   (quiz) => quiz._id === _id
        // ) as QuizData;
        return { ...state, quiz_id:_id as string };
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


  const saveResult = async(quizId : string)=>{
    try{
      if(!authState.login){
        navigate("/login");
        return
      }
      setLoading(true)
      const {data} = await axios.post(`quiz/${quizId}/result/save`,{result : state.questionsAnswered})
      setLoading(false)
      toast.success("Result saved")
      navigate("/profile")
    }catch(err:any){
      if(axios.isAxiosError(err)){
        const serverError = err as AxiosError<{msg :String}>
        return toast.error(serverError)
      }
      toast.error(err.response.message)

    }
  }

  

  return (
    <quizContext.Provider
      value={{ state, dispatch, quizes, loading, setLoading, setQuizes , saveResult }}
    >
      {children}
    </quizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(quizContext);
};

export default QuizProvider;
