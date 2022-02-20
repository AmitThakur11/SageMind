export type Option = {
    option: string;
    isRight: boolean;
  };
  
  export type Quiz = {
    id: number;
    question: string;
    points: number;
    options: Option[];
  };
  
  export type QuizData = {
    id: number;
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
    quiz_id: number;
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
    id?: number;
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

