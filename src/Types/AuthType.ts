export type User ={
    _id? : string;
    username?: string;
    email? : string;
}
export type InitialAuthState ={

    login : boolean;
    user : User;

}

export type AuthAxiosType = {
    success : boolean;
    data : User;
  }

  export type InputType = {
    username? : string;
    email : string;
    password : string;
    cpassword? : string;
}


export type Payload = {
    _id? : string;
    username? : string;
    email? :string;
    user : {
        _id? : string;
        email? : string;
        username? : string;
    };
    token? : string;

}
export type AuthAction = {
    type : "LOGIN" | "LOGOUT";
    payload: Payload;
};
export type AuthDispatch = (action : AuthAction)=>void;


export type RegisterType = {
    success: boolean;
    msg: string;
    data: {
        username: string;
        email: string;
    }
}

export type LoginType = {
    success: boolean;
    msg: string;
    value: {
        user: {
            _id : string;
            username: string;
            email: string;
        },
        token: string;
    }
}

export type AuthHandleType = (input : InputType)=>void
export type AuthContextType = {authState : InitialAuthState , authDispatch : AuthDispatch  ,register : AuthHandleType , login : AuthHandleType , loading : boolean }
export type InputEventType = React.ChangeEvent<HTMLInputElement>;
export type ButtonEventType = React.MouseEvent<HTMLButtonElement>;