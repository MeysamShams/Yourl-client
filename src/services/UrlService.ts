import UrlModel from "models/UrlModel";
import HttpService from "./HttpService";

export default abstract class UrlService extends HttpService{
    
    // simple shortener
    static async shortener(originalUrl:{url:string}):Promise<UrlModel>{

        const {data}=await this.post("/public/shortener",{url:originalUrl.url})
        return new UrlModel(data['_id'],data['originalUrl'],data['hash'],data['createdAt'],data['expireAt'])
    }

    // get original url and redirect user to that
    static async getOriginalUrl(hash:string):Promise<string>{

        const {data}=await this.get(`/public/${hash}/original-url`);
        return data['originalUrl']
    }
}