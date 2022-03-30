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
}