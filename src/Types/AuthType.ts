export type InitialAuthState ={

    login : boolean;
    user :{
        username? : string ,
        email : string,
        password : string,
        cpassword? : string
    }

}

export type AuthAction = {type : "LOGIN"}
export type AuthDispatch = (action : AuthAction)=>void