import "./Profile.css"
import { useEffect , useState } from "react"
import { useAuth } from "../../Context/AuthContext"
import { useQuiz } from "../../Context/QuizContext"
import { useNavigate } from "react-router"
import axios, {AxiosError} from "axios"
import { AxiosResultsType } from "../../Types/QuizType"
import axiosInitialiser from "../../utils/axiosInitialize"
import {ResultCard } from "./ResultCard"
import Loader from "../Loader/Loader"
const Profile = ()=>{
    const {authDispatch} = useAuth();
    const {loading,setLoading} = useQuiz()
    const [results,setResults] = useState([] as AxiosResultsType)
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            try{
                axiosInitialiser()
                setLoading(true);
                const response = await axios.get<AxiosResultsType>("quiz/results");
                setResults(response.data)
                setLoading(false);
            }catch(err){
                if(axios.isAxiosError(err)){
                    const serverError = err as AxiosError;
                    console.log(serverError)
                }
                console.log(err)
            }
            
        })()

    },[setLoading])
    return(
        <>
        {
            loading && <Loader/>
        }
        
        {
            !loading && 
            <div className ="resultContainer">
                <section className ="result">
                   { 
                    results.length > 0 ? results.map((result)=>{
                       return <ResultCard result ={result}/>

                    }) : <button onClick = { ()=>navigate("/")}>Play Quiz</button>
                }
                </section>
            <button className ="logoutBtn showBtn" onClick ={()=>{
                authDispatch({type : "LOGOUT" ,payload : {user:{}}})
                navigate("/login")
            }}>LOG OUT </button>
        </div>}
        </>
    )
}

export default Profile