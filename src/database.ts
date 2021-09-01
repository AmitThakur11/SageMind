import { QuizData } from "./Types/QuizType"

const quizData: QuizData[] = [
  {
    id: 1,
    quizName: "Geography",
    quizCover :"https://i.ibb.co/P9PyFmD/002-plant.png",
    quiz: [
      {
        id: 1,
        question:
          "Which of the following state has got largest forest in the country?",
        points: 10,
        options: [
          { option: "Madhya Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Madhya Pradesh", isRight: false },
          { option: "Chattisgarh", isRight: false }
        ]
      },
      {
        id: 2,
        question: "Which among is not mangroves region of India?",
        points: 10,
        options: [
          { option: "West Bengal", isRight: false },
          { option: "Udupi", isRight: true },
          { option: "Condapur", isRight: false },
          { option: "Ratnagiri", isRight: false }
        ]
      },
      {
        id: 3,
        question:
          "In ______ India Set Up A National Forest Commission To Review And Assess India’s Policy And Law",
        points: 10,
        options: [
          { option: "2000", isRight: false },
          { option: "2001", isRight: false },
          { option: "2002", isRight: true },
          { option: "2015", isRight: false }
        ]
      },
      {
        id: 4,
        question: "Greater Flamingoes Amid Forests Belongs To",
        points: 10,
        options: [
          { option: "Uttar pradesh", isRight: false },
          { option: "Andhra Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Assam", isRight: false }
        ]
      },
      {
        id: 5,
        question: "Nicobar Pigeon is Found In The _____ Islands Of India",
        points: 10,
        options: [
          { option: "Andaman and Nicobar", isRight: true },
          { option: "Portblair", isRight: false },
          { option: "Bhopal", isRight: false },
          { option: "Assam", isRight: false }
        ]
      }
    ]
  },

  {
    id: 2,
    quizName: "Technology",
    quizCover : "https://i.ibb.co/jz3stm9/003-biotechnology.png",
    quiz: [
      {
        id: 1,
        question:
          "Which of the following state has got largest forest in the country?",
        points: 10,
        options: [
          { option: "Madhya Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Madhya Pradesh", isRight: false },
          { option: "Chattisgarh", isRight: false }
        ]
      },
      {
        id: 2,
        question: "Which among is not mangroves region of India?",
        points: 10,
        options: [
          { option: "West Bengal", isRight: false },
          { option: "Udupi", isRight: true },
          { option: "Condapur", isRight: false },
          { option: "Ratnagiri", isRight: false }
        ]
      },
      {
        id: 3,
        question:
          "In ______ India Set Up A National Forest Commission To Review And Assess India’s Policy And Law",
        points: 10,
        options: [
          { option: "2000", isRight: false },
          { option: "2001", isRight: false },
          { option: "2002", isRight: true },
          { option: "2015", isRight: false }
        ]
      },
      {
        id: 4,
        question: "Greater Flamingoes Amid Forests Belongs To",
        points: 10,
        options: [
          { option: "Uttar pradesh", isRight: false },
          { option: "Andhra Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Assam", isRight: false }
        ]
      },
      {
        id: 5,
        question: "Nicobar Pigeon is Found In The _____ Islands Of India",
        points: 10,
        options: [
          { option: "Andaman and Nicobar", isRight: true },
          { option: "Portblair", isRight: false },
          { option: "Bhopal", isRight: false },
          { option: "Assam", isRight: false }
        ]
      }
    ]
  }
  ,
  {
    id: 3,
    quizName: "History",
    quizCover : "https://i.ibb.co/Q9rzH72/scroll.png",
    quiz: [
      {
        id: 1,
        question:
          "Which of the following state has got largest forest in the country?",
        points: 10,
        options: [
          { option: "Madhya Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Madhya Pradesh", isRight: false },
          { option: "Chattisgarh", isRight: false }
        ]
      },
      {
        id: 2,
        question: "Which among is not mangroves region of India?",
        points: 10,
        options: [
          { option: "West Bengal", isRight: false },
          { option: "Udupi", isRight: true },
          { option: "Condapur", isRight: false },
          { option: "Ratnagiri", isRight: false }
        ]
      },
      {
        id: 3,
        question:
          "In ______ India Set Up A National Forest Commission To Review And Assess India’s Policy And Law",
        points: 10,
        options: [
          { option: "2000", isRight: false },
          { option: "2001", isRight: false },
          { option: "2002", isRight: true },
          { option: "2015", isRight: false }
        ]
      },
      {
        id: 4,
        question: "Greater Flamingoes Amid Forests Belongs To",
        points: 10,
        options: [
          { option: "Uttar pradesh", isRight: false },
          { option: "Andhra Pradesh", isRight: true },
          { option: "Arunachal Pradesh", isRight: false },
          { option: "Assam", isRight: false }
        ]
      },
      {
        id: 5,
        question: "Nicobar Pigeon is Found In The _____ Islands Of India",
        points: 10,
        options: [
          { option: "Andaman and Nicobar", isRight: true },
          { option: "Portblair", isRight: false },
          { option: "Bhopal", isRight: false },
          { option: "Assam", isRight: false }
        ]
      }
    ]
  }

];

export const rules= [
  "Each question carry equal weightage.",
  "There is no negative marking.",
  "Candidate will get  4 options for each question and have to pick the right one.",
  "If the candidate open another tab or reload the page the test will be  cancel",
  "For each question you have 20 seconds.",
  "All the best"

]

export default quizData;
