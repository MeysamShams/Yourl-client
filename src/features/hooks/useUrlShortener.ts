import { useState } from "react";
import UrlService from "services/UrlService";

export const useUrlShortener=()=>{
    const [loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(false)
    const [shortenedUrl,setShortenedUrl]=useState("");
    const urlSerive=new UrlService()

    const handleSubmit=async(value:{url:string})=>{
        try{
            setLoading(true)
            const urlData=await urlSerive.shortener("/public/shortener",value)
            setLoading(false)
            setShortenedUrl(urlData.shortenedUrl)
            setShowModal(true)
        }catch(e){
            setLoading(false)
        }
    }
    return {
        loading,showModal,setShowModal,shortenedUrl,handleSubmit
    }
    
}