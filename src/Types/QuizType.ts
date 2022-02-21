export type Option = {
    option: string;
    isRight: boolean;
  };
  
  export type Quiz = {
    _id: string;
    question: string;
    points: number;
    options: Option[];
  };
  
  export type QuizData = {
    _id: string;
    quizName: string;
    quizCover : string;
    quiz: Quiz[];
  };

  export type Quizes = {
    quizData : QuizData[];
    rules : string[]
  }

  export type QuizAxiosType = {
    success : boolean,
    quizes : Quizes
  }

  export type QuestionsAnswered = {
    question?: string;
    chosenValue?: string;
    yourChoice?: boolean;
    rightValue?:string;
    
  };
  
  export type QuizAnswered = {
    questionsAnswered: QuestionsAnswered[];
  };
  
  export type InitialState = {
    quiz_id: string;
    questionsAnswered: QuestionsAnswered[];
    score: number;
    current: number;
  };
  
  export type QuizAnswer = {
    question?: string;
    chosenValue?: string ;
    rightValue? : string  ;

  }
  export type  Payload = {
    _id?: string;
    answer?: boolean;
    quizAnswer? : QuizAnswer 

  }
  export type Action = {
    type: "SELECT QUIZ" | "SELECT ANSWER" | "RESET";
    payload: Payload 
  };
  
  export type Dispatch = (action: Action) => void;
  
  export type PassValue = {
    state: InitialState;
    dispatch: Dispatch;
  };

  export type ResultType = {
    
      _id: string,
      quiz: {
        _id: string;
        quizName: string;
        quizCover : string;
      }
      result: [QuizAnswer]
  }

  export type AxiosResultsType = ResultType[]

