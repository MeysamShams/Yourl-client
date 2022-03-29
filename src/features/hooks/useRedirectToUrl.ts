import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import UrlService from "services/UrlService"


// get short url and redirect user to original url
export const useRedirectToUrl=()=>{
    const {shortUrl}=useParams<{shortUrl:string}>();
    const navigate = useNavigate();
    const service=new UrlService();
        
    const redirectToOriginalUrl=async():Promise<void>=>{
        if(shortUrl?.length===6 && shortUrl.match(/^[a-z0-9]+$/i)){

            const url=await service.getOriginalUrl(shortUrl)
            window.location.replace(url);
            
        }else{
            navigate("/404")
        }
    }

    useEffect(()=>{
        redirectToOriginalUrl()
    })
}