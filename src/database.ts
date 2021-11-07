import { QuizData } from "./Types/QuizType"

const quizData: QuizData[] = [
  
  {
    id: 2,
    quizName: "Technology",
    quizCover : "https://i.ibb.co/jz3stm9/003-biotechnology.png",
    quiz: [
      {
        id: 1,
        question:
          `'OS' computer abbreviation usually means ?`,
        points: 10,
        options: [
          { option: "Order of Significance", isRight: false },
          { option: "Open Software", isRight: false },
          { option: "Operating Software", isRight: true },
          { option: "Optical Sensor", isRight: false }
        ]
      },
      {
        id: 2,
        question: "In which decade with the first transatlantic radio broadcast occur?",
        points: 10,
        options: [
          { option: "1850s", isRight: false },
          { option: "1860s", isRight: false},
          { option: "1870s", isRight: false },
          { option: "1900s", isRight: true }
        ]
      },
      {
        id: 3,
        question:
          `'.MOV' extension refers usually to what kind of file?`,
        points: 10,
        options: [
          { option: "Image file", isRight: false },
          { option: "Animation/Movie file", isRight: true },
          { option: "Audio File", isRight: false },
          { option: "MS office docs", isRight: false }
        ]
      },
      {
        id: 4,
        question: "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
        points: 10,
        options: [
          { option: "Choke", isRight: false },
          { option: "Inductor", isRight: false},
          { option: "Resisitor", isRight: true },
          { option: "Capacitor", isRight: false }
        ]
      },
      {
        id: 5,
        question: "'DB' computer abbreviation usually means ?",
        points: 10,
        options: [
          { option: "Database", isRight: true },
          { option: "Double Byte", isRight: false },
          { option: "Data Block", isRight: false },
          { option: "Driver Boot", isRight: false }
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
        question:"Todar Mal was associated with",
        points: 10,
        options: [
          { option: "Music", isRight: false },
          { option: "Literature", isRight: false },
          { option: "Finance", isRight: true },
          { option: "Law", isRight: false }
        ]
      },
      {
        id: 2,
        question: "The language of discourses of Gautama Buddha was",
        points: 10,
        options: [
          { option: "Bhojpuri", isRight: false },
          { option: "Magadhi", isRight: false},
          { option: "Pali", isRight: true },
          { option: "Sanskrit", isRight: false }
        ]
      },
      {
        id: 3,
        question:
          "Tipu sultan was the ruler of",
        points: 10,
        options: [
          { option: "Hyderabad", isRight: false },
          { option: "Madurai", isRight: false },
          { option: "Mysore", isRight: true },
          { option: "Vijayanagar", isRight: false }
        ]
      },
      {
        id: 4,
        question: "The Kalinga was fought in",
        points: 10,
        options: [
          { option: "321 BC", isRight: false },
          { option: "301 BC", isRight: true },
          { option: "261 BC", isRight: false },
          { option: "241 BC", isRight: false }
        ]
      },
      {
        id: 5,
        question: "The Vedas contain all the truth was interpreted by",
        points: 10,
        options: [
          { option: "Swami Vivekananda", isRight: true },
          { option: "Swami Dayananda", isRight: false },
          { option: "Raja Rammohan Roy", isRight: false },
          { option: "None of the Above", isRight: false }
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
  "For each question you have 15 seconds.",
  "All the best"

]

export default quizData;
