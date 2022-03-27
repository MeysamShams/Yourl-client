import { XIcon } from "@primer/octicons-react";
import { MouseEventHandler } from "react";
import { CopyUrlToClipboard } from "./CopyUrlToClipboard";
import { QRCode } from "./QRCode";
import { ShareUrl } from "./ShareUrl";

interface UrlShortenerModalProps{
    showModal:boolean
    onClose:MouseEventHandler<HTMLButtonElement>
    shortenedUrl:string
}
export const UrlShortenerModal=({showModal,shortenedUrl,onClose}:UrlShortenerModalProps)=>{
    return(
    <div className={`modal ${showModal && 'modal-open'}`}>
        <div className="modal-box lg:w-96 ">
          <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}><XIcon  size={24}/></button>
          {/* QRcode */}
          <QRCode value={shortenedUrl}/>
          {/* show url and copy that to clipboard */}
            <CopyUrlToClipboard value={shortenedUrl}/>
          {/* share url */}
          <div className="text-center">
            <ShareUrl shortenedUrl={shortenedUrl}/>
          </div>
        </div>
    </div>
    );
}