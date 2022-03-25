import {LinkIcon , ArrowRightIcon} from '@primer/octicons-react'
import tap from 'assets/images/tap.png'
import openSource from 'assets/images/open-source.png'
import link from 'assets/images/url.png'
import reliable from 'assets/images/reliable.png'

import './header.css';
import { AppFeature } from './AppFeature'
import { UrlShortener } from './UrlShortener'
import { Link } from 'react-router-dom'
export const Header=()=>{
    const appFeatures=[
      {title:"easy to use",icon:tap},
      {title:"url customization",icon:link},
      {title:"fast & reliable",icon:reliable},
      {title:"open source",icon:openSource},
    ]
    return(
        <header className="main-header mt-16">
        <div className="container mx-auto">
            <h1 className="text-white text-center pt-16 font-bold text-2xl ">YO<span className='text-rose-200'>URL</span> Shortener</h1>
            <p className="text-white text-center mt-5 px-3 text-sm"><LinkIcon size={20} className="mr-2"/>Create a shortened link and use it anywhere.</p>
            <UrlShortener/>
            <div className='text-white text-center  mt-3'>
                <Link to="/register" className='btn btn-ghost text-sm  py-3'>Need More Customization ?</Link>
            </div>
        </div>
            <div className="md:w-5/6 lg:w-4/6 mx-auto mt-12 p-2 drop-shadow-md grid grid-cols-2 lg:grid-cols-4 md:gird-cols-4 gap-0 bg-white rounded-none lg:rounded-lg md:rounded-lg "> 
                {appFeatures.map((item:any,index:number)=><AppFeature key={index} index={index+1} title={item.title} icon={item.icon}/>)}
            </div>
        
    </header>
    );
}