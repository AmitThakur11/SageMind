import { QuizData } from "./Types/QuizType"

const quizData: QuizData[] = [
  
  {
    id: 1,
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
    id: 2,
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
  },{
    id: 3,
    quizName: "Politics",
    quizCover : "https://cdn-icons-png.flaticon.com/512/5965/5965725.png",
    quiz: [
      {
        id: 1,
        question:"The power to decide an election petition is vested in the",
        points: 10,
        options: [
          { option: "Parliament", isRight: false },
          { option: "Supreme Court", isRight: false },
          { option: "High courts", isRight: true },
          { option: "Election Commission", isRight: false }
        ]
      },
      {
        id: 2,
        question: "The present Lok Sabha is the",
        points: 10,
        options: [
          { option: "14th Lok Sabha", isRight: false },
          { option: "15th Lok Sabha", isRight: false},
          { option: "16th Lok Sabha", isRight: false },
          { option: "17th Lok Sabha", isRight: true }
        ]
      },
      {
        id: 3,
        question:"The members of Lok Sabha hold office for a term of",
        points: 10,
        options: [
          { option: "4 years", isRight: false },
          { option: "5 years", isRight: true },
          { option: "6 years", isRight: false },
          { option: "3 years", isRight: false }
        ]
      },
      {
        id: 4,
        question: "The minimum age to qualify for election to the Lok Sabha is",
        points: 10,
        options: [
          { option: "25 years", isRight: true },
          { option: "21 years", isRight: false},
          { option: "18 years", isRight: false },
          { option: "35 years", isRight: false }
        ]
      },
      {
        id: 5,
        question: "The office of the president can fall vacant due to",
        points: 10,
        options: [
          { option: "resignation", isRight: false },
          { option: "death", isRight: false },
          { option: "removal", isRight: false },
          { option: "All of the above", isRight: true }
        ]
      },
      {
        id: 6,
        question: "The Muslim League as a political party was founded in",
        points: 10,
        options: [
          { option: "1906", isRight: true },
          { option: "1909", isRight: false },
          { option: "1915", isRight: false },
          { option: "1919", isRight: false}
        ]
      }
    ]
  },
  {
    id: 4,
    quizName: "Geography",
    quizCover : "https://cdn-icons-png.flaticon.com/512/4289/4289222.png",
    quiz: [
      {
        id: 1,
        question:
          `The percentage of irrigated land in India is about`,
        points: 10,
        options: [
          { option: "45", isRight: false },
          { option: "65", isRight: false },
          { option: "35", isRight: true },
          { option: "25", isRight: false }
        ]
      },
      {
        id: 2,
        question: "The Yarlung Zangbo river, in India, is known as",
        points: 10,
        options: [
          { option: "Ganga", isRight: false },
          { option: "Indus", isRight: false},
          { option: "Brahmaputra", isRight: true },
          { option: "Mahanadi", isRight: false}
        ]
      },
      {
        id: 3,
        question:
          `The Salal Project is on the river`,
        points: 10,
        options: [
          { option: "Chenab", isRight: true },
          { option: "Jhelum", isRight: false },
          { option: "Ravi", isRight: false },
          { option: "Sutlej", isRight: false }
        ]
      },
      {
        id: 4,
        question: "	The percentage of earth surface covered by India is",
        points: 10,
        options: [
          { option: "2.4", isRight: true },
          { option: "3.4", isRight: false},
          { option: "4.4", isRight: false},
          { option: "5.4", isRight: false }
        ]
      },
      {
        id: 5,
        question: "The state having a largest area of forest cover in India is",
        points: 10,
        options: [
          { option: "Arunanchal Pradesh", isRight: false },
          { option: "Haryana", isRight: false },
          { option: "Madhya Pradesh", isRight: true },
          { option: "Assam", isRight: false }
        ]
      }
    ]
  },
  {
    id: 5,
    quizName: "Mythology",
    quizCover : "https://cdn-icons-png.flaticon.com/512/4086/4086532.png",
    quiz: [
      {
        id: 1,
        question:
          `Who wrote down the epic Mahabharata while Vyasa was dictating`,
        points: 10,
        options: [
          { option: "Narada", isRight: false },
          { option: "Vishwakarma", isRight: false },
          { option: "Ganesh", isRight: true },
          { option: "Shiv", isRight: false }
        ]
      },
      {
        id: 2,
        question: "Which one is the first avatar of Lord Vishnu from his Dashavatar",
        points: 10,
        options: [
          { option: "Matsya", isRight: true },
          { option: "Kurma", isRight: false},
          { option: "Varah", isRight: false },
          { option: "Narsimbha", isRight: false}
        ]
      },
      {
        id: 3,
        question:
          `Who brought the River goddess Ganga to Earth from the heavens`,
        points: 10,
        options: [
          { option: "Shree Rama", isRight: false },
          { option: "Krishna", isRight: false },
          { option: "Bhagiratha", isRight: true },
          { option: "Raja Harishchandra", isRight: false }
        ]
      },
      {
        id: 4,
        question: "For how many days was the battle of kurukshetra was fought",
        points: 10,
        options: [
          { option: "12", isRight: false },
          { option: "18", isRight: true},
          { option: "15", isRight: false},
          { option: "8", isRight: false }
        ]
      },
      {
        id: 5,
        question: "Who is known as the  Lord of wealth",
        points: 10,
        options: [
          { option: "Lakshmi", isRight: false },
          { option: "Shiv", isRight: false },
          { option: "Kuber", isRight: true },
          { option: "Brahma", isRight: false }
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
