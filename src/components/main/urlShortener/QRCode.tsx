import { QRCodeSVG } from "qrcode.react";

export const QRCode=({value}:{value:string})=>{
    return(
        <div className="text-center mx-auto mb-5">
            <QRCodeSVG value={value} includeMargin={true} size={170} style={{margin:'auto',borderRadius:"10px"}} bgColor="rgb(237 233 254)" fgColor="rgb(167 139 250)" />
      </div>
    );
}