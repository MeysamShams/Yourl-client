import AuthModel from "models/AuthModel";
import HttpService from "./HttpService";

export default abstract class AuthService extends HttpService{

    // register
    static async register(authCredential:AuthModel):Promise<boolean>{
        
            const {password,username}=authCredential
            const register=await this.post("/auth/register",{password,username});
            if(register.status===201) return true
            else return false
    }


    // login
    static async login(authCredential:AuthModel):Promise<boolean>{
        const {password,username}=authCredential
        const login=await this.post<{token:string}>("/auth/login",{username,password});
        
        if(login.status===201 && login.data.token){
            localStorage.setItem("accessToken",login.data.token);
            return true;
        }else{
            return false;
        }
    }
}