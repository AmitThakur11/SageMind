import Header from "./Components/Header/Header";
import "./App.css";
import { useEffect } from "react";
import {Routes ,Route}  from "react-router-dom"
import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import QuizArea from "./Components/QuizArea/QuizArea";
import QuizRule from "./Components/QuizRule/QuizRule";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import {useQuiz} from "./Context/QuizContext"
import {QuizAxiosType} from "./Types/QuizType"
import axios,{AxiosError} from 'axios'
import axiosInitialiser from "./utils/axiosInitialize";

function App() {
  const {setLoading ,setQuizes} =useQuiz()

  useEffect(() => {

    axiosInitialiser();
    (async()=>{
      try{
      setLoading(true)
      const response = await axios.get<QuizAxiosType>("/quiz/all");
      setQuizes(response.data.quizes)
      setLoading(false)
    }catch(error){
      if(axios.isAxiosError(error)){
        const serverError = error as AxiosError<{msg :String}>
        console.log(serverError)
      }

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
        <PrivateRoute path ="/profile" element = {<Profile/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/signup" element ={<SignUp/>}/>

      
      </Routes>
      </section>
    </div>
  );
}

export default App;
