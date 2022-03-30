import AuthModel from "models/AuthModel";
import { HttpService } from "./HttpService";

export default class AuthService extends HttpService{

    // register
    async register(authCredential:AuthModel):Promise<boolean>{
        try{
            const {password,username}=authCredential
            const register=await this.post("/auth/register",{password,username});
            if(register.status===201) return true
            else return false
            
        }catch(e){
            throw this.errorHandler(e)
        }
    }
}