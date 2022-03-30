import { useState } from "react";
import UrlService from "services/UrlService";

export const useUrlShortener=()=>{
    const [loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(false)
    const [shortenedUrl,setShortenedUrl]=useState("");

    const handleSubmit=async(value:{url:string})=>{
        try{
            setLoading(true)
            const urlData=await UrlService.shortener(value)
            setLoading(false)
            setShortenedUrl(urlData.shortenedUrl)
            setShowModal(true)
        }catch(e){
            setLoading(false)
            UrlService.errorHandler(e)
        }
    }
    return {
        loading,showModal,setShowModal,shortenedUrl,handleSubmit
    }
    
}