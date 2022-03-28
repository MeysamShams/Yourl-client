import { useEffect } from "react"
import { useParams } from "react-router-dom"
import UrlService from "services/UrlService"

export const RedirectToUrl=()=>{
    const params=useParams()

    const redirectToOriginalUrl=async()=>{
        const service=new UrlService();
        const url=await service.getOriginalUrl(params.hash)
        window.location.href=url;
    }
    useEffect(()=>{
        redirectToOriginalUrl()
    })
    return <></>
}