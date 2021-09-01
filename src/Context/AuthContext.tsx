import { useReducer } from "react"
import {useContext , createContext, ReactNode } from "react"
import { InitialAuthState , AuthDispatch , AuthAction } from "../Types/AuthType"


export const AuthContext = createContext<{authState : InitialAuthState , authDispatch : AuthDispatch}>({} as {authState : InitialAuthState , authDispatch : AuthDispatch})

export const initialAuthState : InitialAuthState = {
    login : false,
    user : {
        username : "",
        email : "",
        password : "",
        cpassword : ""
    }
}

export const authReducer = (authState:InitialAuthState , action : AuthAction)=>{
    switch(action.type){
        case "LOGIN":{
            return {...authState , login :true }
        }
    }

}

const AuthProvider = ({children}:{children : ReactNode})=>{

    const [authState , authDispatch] = useReducer(authReducer , initialAuthState)
    
    return(
        <AuthContext.Provider value ={{authState , authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)


export default AuthProvider