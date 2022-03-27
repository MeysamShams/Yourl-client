import { useUrlShortener } from "features/hooks/useUrlShortener";
import { urlShortenerSchema } from "features/validations/urlShortenerSchema";
import { useFormik } from "formik";
import { UrlShortenerModal } from "./UrlShortenerModal";


export const UrlShortener=()=>{
    const {handleSubmit,loading,setShowModal,showModal,shortenedUrl}=useUrlShortener()
    const formik=useFormik({
        initialValues:{
            url:''
        },
        validationSchema:urlShortenerSchema,
        onSubmit:handleSubmit
    })
    return(
        <>
          <div className="w-full px-2">
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-container w-full mx-auto lg:px-0 md:px-0 md:w-5/6 lg:w-4/6  relative">
                        <input type="text" name="url" value={formik.values.url} onChange={formik.handleChange} className="url-input focus:ring-4 focus:ring-blue-500/20 transition-all  block w-full mx-auto mt-5 py-4 px-4 rounded-md outline-none shadow-lg" placeholder="Paste your URL:" />
                        <button type="submit" className={`${loading? 'loading ' : ''} btn border-0 cursor-pointer  short-btn text-white py-3 rounded-none rounded-tr-md rounded-br-md mt-1 transition-all hover:bg-violet-800 font-bold  px-3 bg-violet-600  `}>SHORTEN</button>
                    <span className="text-white text-sm text-yellow-400">{formik.errors.url}</span>
                    </div>
                </form>
          </div>
          {/* modal */}
          <UrlShortenerModal showModal={showModal} shortenedUrl={shortenedUrl} onClose={()=>setShowModal(false)}/>
        </>
    )
}