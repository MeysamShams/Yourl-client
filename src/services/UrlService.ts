import UrlModel from "models/UrlModel";
import { HttpService } from "./HttpService";

export default class UrlService extends HttpService{
    
    async shortener(endpoint:string,originalUrl:{url:string}):Promise<UrlModel>{
        try{
            const {data}=await this.post(endpoint,{url:originalUrl.url})
            return new UrlModel(data['_id'],data['originalUrl'],data['hash'],data['createdAt'],data['expireAt'])
        }catch(e:any){
            throw console.log(e)
        }
    }
}