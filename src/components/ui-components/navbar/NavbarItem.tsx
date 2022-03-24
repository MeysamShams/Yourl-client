import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
type Visibility="alwaysVisible" | 'visibleOnSmallScreen' | 'visibleOnLargeScreen'
interface NavbarItemProps{
    path:string
    icon:ReactElement
    label:string
    className?:string
    isExternalLink?:boolean
    visibility?:Visibility
}

export const NavbarItem=({path,icon,label,className,isExternalLink=false,visibility='alwaysVisible'}:NavbarItemProps)=>{
    const setVisibility=():string=>{
        switch(visibility){
            case 'alwaysVisible' : return 'block'
            case 'visibleOnLargeScreen' : return 'hidden lg:block'
            case 'visibleOnSmallScreen' : return 'block lg:hidden'
        }
    }
    const setClassName=className || 'text-white btn btn-ghost px-3 py-2';
    
    return(
        <div className={`${setVisibility()} flex items-center mx-2 `}>
            {isExternalLink 
                ?        
                <a href={path} className={setClassName}>{icon}{label}</a>
                :
                <NavLink to={path} className={setClassName}>{icon}{label}</NavLink>
            }
        </div>
    );
}
 