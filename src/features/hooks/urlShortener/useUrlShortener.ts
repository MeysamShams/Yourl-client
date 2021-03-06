import UrlModel from "models/UrlModel";
import { useState } from "react";
import UrlService from "services/UrlService";

export const useUrlShortener=()=>{
    const [showModal,setShowModal]=useState(false)
    const [shortenedUrl,setShortenedUrl]=useState<UrlModel>(new UrlModel(""));

    const handleSubmit=async(value:{url:string})=>{
        try{
            const urlData=await UrlService.shortener(value)
            setShortenedUrl(urlData)
            setShowModal(true)
        }catch(e){
            UrlService.errorHandler(e)
        }
    }
    return {
        showModal,setShowModal,shortenedUrl,handleSubmit
    }
    
}