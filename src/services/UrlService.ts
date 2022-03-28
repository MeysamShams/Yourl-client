import UrlModel from "models/UrlModel";
import { toast } from "react-toastify";
import { HttpService } from "./HttpService";

export default class UrlService extends HttpService{
    
    // simple shortener
    async shortener(originalUrl:{url:string}):Promise<UrlModel>{
        try{
            const {data}=await this.post("/public/shortener",{url:originalUrl.url})
            return new UrlModel(data['_id'],data['originalUrl'],data['hash'],data['createdAt'],data['expireAt'])
        }catch(e:any){
            throw toast(e.message,{type:"error"})
        }
    }

    // get original url and redirect user to that
    async getOriginalUrl(hash:string|undefined):Promise<string>{
        try{
            const {data}=await this.get(`/public/${hash}/original-url`);
            return data['originalUrl']
        }catch(e:any){
            throw toast(e.message,{type:"error"})
        }
    }
}