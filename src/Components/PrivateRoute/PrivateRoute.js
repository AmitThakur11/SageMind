import {Route,Navigate} from "react-router-dom"
import {useAuth} from "../../Context/AuthContext"


const PrivateRoute =({path ,...props})=>{
    
    const {authState} = useAuth() 
    return authState.login?<Route path={path} {...props} />:<Navigate  state = {{from : path}} replace to ="/login"  />
}

export default PrivateRoute