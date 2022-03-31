import { ShareAndroidIcon } from '@primer/octicons-react'
import { useEffect, useState } from 'react'
import telgramIcon from 'assets/images/telegram.svg'
import twitterIcon from 'assets/images/twitter.svg'
import facebookIcon from 'assets/images/facebook.svg'
import linkedinIcon from 'assets/images/linkedin.svg'
import UrlModel from 'models/UrlModel'

interface ShareOption{
    link:string
    icon:any
    tooltip:string
}
export const ShareUrl=({url}:{url:UrlModel})=>{
    const [shareOption,setShareOption]=useState<ShareOption[]>()
    useEffect(()=>{
        const text="Created By YOURL :)"
        setShareOption([
                {
                    link:`https://t.me/share/url?url=${url.shortenedUrl}&text=${text}`,
                    icon:telgramIcon,
                    tooltip:"telegram"
                },
                {
                    link:`https://twitter.com/intent/tweet?url=${url.shortenedUrl}&text=${text}`,
                    icon:twitterIcon,
                    tooltip:"twitter"
                },
                {
                    link:`https://www.facebook.com/sharer/sharer.php?u=${url.shortenedUrl}`,
                    icon:facebookIcon,
                    tooltip:"telegram"
                },
                {
                    link:`https://www.linkedin.com/shareArticle?mini=true&url=${url.shortenedUrl}`,
                    icon:linkedinIcon,
                    tooltip:"linkedin"
                },
            ])
    },[url])
    return(
        <>
            <h5 className="text-center text-gray-500 mt-4 flex items-center justify-center"> 
                <span><ShareAndroidIcon verticalAlign={'middle'} className="mr-2" /></span> Share Link via :
            </h5>
            <div className="flex flex-row justify-center space-x-3 mt-5 ">
              {shareOption?.map((item:ShareOption,index:number)=>{
                  return <a href={item.link} className="tooltip tooltip-top" data-tip={item.tooltip} key={index}><img src={item.icon} className="w-8" alt={item.tooltip} /> </a>
              })}                 
            </div>
        </>
    );
}