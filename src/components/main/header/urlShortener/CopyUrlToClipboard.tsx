import { CopyIcon } from "@primer/octicons-react";
import { useState } from "react";

export const CopyUrlToClipboard=({value}:{value:string})=>{
    const [isCopied,setIsCopied]=useState(false)

    const copyToClipboard = async () => {
        setIsCopied(true)
        await navigator.clipboard.writeText(value);
        setTimeout(()=>{setIsCopied(false)},2000)
    }
    return(
        <div id="url">
            <div className="relative">
                <p className="bg-gray-100 text-gray-600 p-3 rounded-lg"><a href={value} >{value}</a></p>
                <div className={`${isCopied? 'tooltip ' : undefined} absolute top-0 right-0`} data-tip='Copied !' >
                <button onClick={copyToClipboard} className="btn btn-ghost bg-amber-400 hover:bg-amber-500 rounded-tl-none rounded-bl-none text-white">
                    <CopyIcon />
                </button>
                </div>
            </div>
        </div>
    );
}