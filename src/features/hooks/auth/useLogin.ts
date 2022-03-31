import AuthContext from 'features/context/AuthContext';
import AuthModel from 'models/AuthModel';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';

export const useLogin=():((value:AuthModel)=>Promise<void>)=>{
    
    const navigate=useNavigate();
    const authCtx=useContext(AuthContext);

    const handleSubmit=async(values:AuthModel)=>{
        
        try{
            const login=await AuthService.login(values);
            if(login){
                authCtx.login();
                navigate("/profile")
            }
        }catch(e){
            AuthService.errorHandler(e)
        }
        
        
    }
    return handleSubmit;
}