import { createContext, ReactChild, useState } from "react";
import jwtDecode from "jwt-decode";

interface JWTPayload{
    username:string,
    exp:number
}
// get access token from storage and decode that
const jwtDecoder=(): JWTPayload =>{
    const token=localStorage.getItem("accessToken")!;
    if(token && token.length){
        const decodedJwt=jwtDecode<JWTPayload>(token);
        return {username:decodedJwt.username,exp:decodedJwt.exp}
    }else return {username:"",exp:0};
}

// check token expire time
const checkLoginStatus=():boolean=>{
    const decodedJwt=jwtDecoder();
    if(decodedJwt.exp){
        if(new Date(decodedJwt.exp).getTime() > new Date().getTime()){
            return true
        }else{
            return false
        }
    }else return false;
}

const AuthContext=createContext({
    isLoggedIn:false,
    username:"",
    login:()=>{},
    logout:()=>{}
});

export const AuthContextProvider=(props:{children:ReactChild})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(checkLoginStatus())
    const [username,setUsername]=useState(jwtDecoder().username);

    const login=():void=>{
        setIsLoggedIn(true)
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