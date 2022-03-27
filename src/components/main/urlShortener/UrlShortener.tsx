import {FormEvent, useState } from "react"
import { UrlShortenerModal } from "./UrlShortenerModal";

export const UrlShortener=()=>{
    const [urlValue,setUrl]=useState<string>("")
    const [loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(false)
    const [shortenedUrl]=useState("http://Yourl.com/weDfg1");

    const handleUrlChange=(e:FormEvent<HTMLInputElement>)=>{
        setUrl(e.currentTarget.value)
    }
    const handleClick=()=>{
        // setLoading(!loading)
        setShowModal(true)    
    }

    return(
        <>
          <div className="w-full px-2">
              <div className="input-container w-full mx-auto lg:px-0 md:px-0 md:w-5/6 lg:w-4/6  relative">
                  <input type="text" name="url" value={urlValue} onChange={handleUrlChange} className="url-input focus:ring-4 focus:ring-blue-500/20 transition-all  block w-full mx-auto mt-5 py-4 px-4 rounded-md outline-none shadow-lg" placeholder="Paste your URL : " />
                  <button onClick={handleClick} className={`${loading? 'loading ' : ''} btn border-0 cursor-pointer  short-btn text-white py-3 rounded-none rounded-tr-md rounded-br-md mt-1 transition-all hover:bg-violet-800 font-bold  px-3 bg-violet-600  `}>SHORTEN</button>
              </div>
          </div>
          {/* modal */}
          <UrlShortenerModal showModal={showModal} shortenedUrl={shortenedUrl} onClose={()=>setShowModal(false)}/>
        </>
    )
}