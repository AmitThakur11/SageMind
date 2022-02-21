import { useReducer,useState } from "react"
import {useContext , createContext, ReactNode } from "react"
import { InitialAuthState, AuthAction ,InputType,RegisterType,LoginType,AuthContextType} from "../Types/AuthType"
import axios , {AxiosError} from "axios"
import { useNavigate } from "react-router";


// export type AuthHandleType = (input : InputType)=>void
// export type AuthContextType = {authState : InitialAuthState , authDispatch : AuthDispatch  ,register : AuthHandleType , login : AuthHandleType , loading : boolean }
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)


export const initialAuthState : InitialAuthState = {
    login : localStorage?.getItem('quizToken') ? true : false,
    user : {
        _id : "",
        username : "",
        email : ""  
    }
}







export const authReducer = (authState:InitialAuthState , action : AuthAction):InitialAuthState=>{
    const {user,token}= action.payload
    switch(action.type){
        case "LOGIN":{
            localStorage.setItem("quizToken",token as string)
            console.log(user)
            return {...authState , login :true , user : user }
        }
        case "LOGOUT":{
            localStorage.removeItem('quizToken');
            return initialAuthState
        }
        
        
        
    }

}




const AuthProvider = ({children}:{children : ReactNode})=>{

    const [loading,setLoading] = useState(false)

    const [authState , authDispatch] = useReducer(authReducer , initialAuthState)
    const navigate = useNavigate();

    const register = async(input : InputType)=>{

        try{
            setLoading(true)
            const response = await axios.post<RegisterType>("/auth/register",input);
            setLoading(false)
            navigate("/")
            console.log(response)
        }catch(err){
            setLoading(false)
            if(axios.isAxiosError(err)){
                const serverError = err as AxiosError<{msg :String}>
                return console.log(serverError)
              }
              console.log(err)
        }
    
    }

    const login = async(input : InputType)=>{

        try{
            setLoading(true)
            const {data} = await axios.post<LoginType>("/auth/login",input);
            authDispatch({type : "LOGIN",payload : {user : data.value.user , token : data.value.token}})
            setLoading(false)
            navigate("/")
            
        }catch(err){
            setLoading(false)
            if(axios.isAxiosError(err)){
                const serverError = err as AxiosError<{msg :String}>
                return console.log(serverError)
              }
              console.log(err)
        }
    
    }
    return(



<AuthContext.Provider value ={{authState , authDispatch , register , login ,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)


export default AuthProvider