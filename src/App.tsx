import Header from "./Components/Header/Header";
import "./App.css";
import { useEffect } from "react";
import {Routes ,Route}  from "react-router-dom"
import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import QuizArea from "./Components/QuizArea/QuizArea";
import QuizRule from "./Components/QuizRule/QuizRule";
import {useQuiz} from "./Context/QuizContext"
import {QuizAxiosType} from "./Types/QuizType"
import axios,{AxiosError} from 'axios'

function App() {
  const {setLoading ,setQuizes} =useQuiz()
  useEffect(() => {

    (async()=>{
      try{
      setLoading(true)
      const response = await axios.get<QuizAxiosType>("http://localhost:5000/quiz");
      setQuizes(response.data.quizes)
      setLoading(false)
    }catch(error){
      if(axios.isAxiosError(error)){
        const serverError = error as AxiosError<{msg :String}>
        console.log(serverError)
      }
      console.log(error)

    }})()
        
  }, [setLoading,setQuizes])

  return (
    <div className="App">
      <Header/>
      <section className ="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizinfo/:id" element={<QuizRule />} />
        <Route path="/quiz/:id" element={<QuizArea />} />
        <Route path ="/leaderboard" element ={<LeaderBoard/>}/>
        <Route path ="/profile" element = {<Profile/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/signup" element ={<Signup/>}/>

      
      </Routes>
      </section>
    </div>
  );
}

export default App;
