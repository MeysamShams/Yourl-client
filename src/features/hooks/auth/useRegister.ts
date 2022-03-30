import AuthService from 'services/AuthService';
import AuthModel from 'models/AuthModel';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useRegister=():((value:AuthModel)=>Promise<void>)=>{
    const authService=new AuthService();
    const navigate=useNavigate();

    const handleRegister=async(values:AuthModel):Promise<void>=>{
        const isSuccess=await authService.register(values);
        if(isSuccess){
            navigate("/auth/login")
            toast("Your account has been successfully created",{type:"success"})
        }else{
            toast("an error occurred while creating your account",{type:"error"})
        }
    }
    return handleRegister;
    
}