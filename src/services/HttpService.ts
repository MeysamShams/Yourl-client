import Axios from "axios";
import config from 'config.json'
import { toast } from "react-toastify";

export default abstract class HttpService{
    private static readonly axios=Axios.create({
        baseURL: process.env.NODE_ENV === 'production' ? config.prod.apiBaseUrl : config.dev.apiBaseUrl,
        timeout: 10000,
    });
    protected static readonly get=this.axios.get
    protected static readonly post=this.axios.post
    protected static readonly delete=this.axios.delete
    protected static readonly put=this.axios.put
    protected static readonly patch=this.axios.patch

    // handle service errors
    public static errorHandler(error:any):void{

            if(Axios.isAxiosError(error)){

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const statusCode=error.response.status;
                    const errorMessage=error.response.data.message;

                    if(statusCode>=500){
                        // redirect to 500 error page
                        window.location.pathname="/500"
                    }
                    else if(statusCode>=400 && statusCode<500){
                        // bad request
                        if(statusCode===400){
                            this.toastErrors(this.extractErrorMessage(errorMessage))
                        }
                        // unauthorized
                        if(statusCode===401){
                            window.location.pathname="/login"
                            this.toastErrors('Please login first to continue')
                        }
                        // forbidden
                        if(statusCode===403){
                            this.toastErrors('Access is denied ! ')
                        }
                        // not found
                        if(statusCode===404){
                            // redirect to 404 error page
                            window.location.pathname="/404"
                        }
                        // conflict
                        if(statusCode===409){
                            this.toastErrors(this.extractErrorMessage(errorMessage))
                        }
                    }else{
                        this.toastErrors('Sorry, something went wrong! ')
                    }
    
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser 
                    this.toastErrors("Network Error !")
                } else{
                    this.toastErrors('Sorry, something went wrong! ')
                }
            } else {
                this.toastErrors(process.env.NODE_ENV==='production'? 'Sorry, something went wrong! ':error.message)
            }
    }
    
    // show errors using react toastify
    private static toastErrors(error:string):void{
        toast(error,{type:"error"})
    }

    // extract error message from response data
    private static extractErrorMessage(errors:unknown):string{
        let errorMessage="";
        if(Array.isArray(errors)){
            errors.forEach((msg:string)=>errorMessage+=msg+"\n")
        }
        else if(typeof errors==="string") errorMessage=errors;
        else errorMessage="An error occurred !"
        return errorMessage;
    }
}