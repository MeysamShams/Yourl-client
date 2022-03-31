import AuthContext from 'features/context/AuthContext';
import AuthModel from 'models/AuthModel';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from 'services/AuthService';

export const useAuth=():{handleLogin:(value:AuthModel)=>Promise<void>,handleRegister:(value:AuthModel)=>Promise<void>}=>{
    
    const navigate=useNavigate();
    const authCtx=useContext(AuthContext);

    const handleLogin=async(values:AuthModel)=>{
        try{
            const login=await AuthService.login(values);
            if(login){
                authCtx.login();
                navigate("/profile",{replace:true})
            }
        }catch(e){
            AuthService.errorHandler(e)
        }
    }

    const handleRegister=async(values:AuthModel):Promise<void>=>{
        try{
            const register=await AuthService.register(values);
            if(register){
                navigate("/auth/login")
                toast("Your account has been successfully created",{type:"success"})
            }else{
                toast("an error occurred while creating your account",{type:"error"})
            }
        }catch(e){
            AuthService.errorHandler(e)
        }
    }
    return {handleLogin,handleRegister};
}