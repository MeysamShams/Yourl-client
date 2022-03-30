import { createContext, ReactChild, useState } from "react";

interface logInPayload{
    username:string,
}

const AuthContext=createContext({
    isLoggedIn:false,
    username:"",
    login:(payload:logInPayload)=>{},
    logout:()=>{}
});

export const AuthContextProvider=(props:{children:ReactChild})=>{

    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [username,setUsername]=useState("");

    const login=(payload:logInPayload):void=>{
        setIsLoggedIn(true)
        setUsername(payload.username)
    }

    const logout=():void=>{
        setIsLoggedIn(false)
        setUsername("")
    }

    return(
        <AuthContext.Provider 
            value={{
                isLoggedIn,
                username,
                login,
                logout
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContext;