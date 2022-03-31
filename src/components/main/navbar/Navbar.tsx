import {NavLink} from 'react-router-dom'
import {MarkGithubIcon,CodeIcon,PersonAddIcon,PersonIcon,ThreeBarsIcon} from '@primer/octicons-react'
import { NavbarItem } from './NavbarItem'
import { NavbarLogo } from './NavbarLogo'
import { useContext, useState } from 'react'
import CSS from 'csstype';
import AuthContext from 'features/context/AuthContext'

const mountMenuStyle:CSS.Properties={display:'visible',opacity:1}
const unMountMenuStyle:CSS.Properties={visibility:'hidden',opacity:0}

export const Navbar=()=>{

    const [showMenu,setShowMenu]=useState(false)
    const authCtx=useContext(AuthContext);
    return (
        <>
            <nav className="bg-violet-600 fixed top-0 w-full py-4 z-50">
                <div className='container  px-3 md:px-5 lg:px-10 m-auto flex flex-row justify-between'>
                    <div className='flex flex-row items-center'>
                        <button className='lg:hidden mr-5' onClick={()=>setShowMenu((prev)=>!prev)}>
                            <ThreeBarsIcon size={26} className="text-white" />
                        </button>
                        <NavbarLogo/>
                        <NavbarItem visibility={'visibleOnLargeScreen'} label='API Usage' path='/#api-usage'  icon={<CodeIcon size={22} className="mr-2"/>}/>
                        <NavbarItem visibility={'visibleOnLargeScreen'} isExternalLink={true} label='Github Repository' path='https://github.com/MeysamShams/Yourl' icon={<MarkGithubIcon size={22} className="mr-2"/>}/>

                    </div>
                    <div className='flex flex-row items-center'>
                        {authCtx.isLoggedIn
                            ?
                            <>
                                <NavbarItem label='Profile' path='/profile' className='btn bg-yellow-300 text-amber-900 border-0 hover:bg-yellow-400 py-2' />
                                <button className='btn btn-ghost text-white' onClick={()=>authCtx.logout()}>Logout</button>
                        
                            </> 
                            :
                            <>
                                <NavbarItem label='Login' path='/auth/login'  />
                                <NavbarItem label='Register' path='/auth/register' className='btn bg-yellow-300 text-amber-900 border-0 hover:bg-yellow-400 py-2' />
                            </> 
                        }
                    </div>
                </div>
            </nav>
            {/* responsive menu */}
            <div className='fixed top-16 container w-full z-50 bg-violet-600 py-5 md:px-5 m-auto transition-all' style={showMenu? mountMenuStyle : unMountMenuStyle}>
                    <NavbarItem visibility={'visibleOnSmallScreen'}  label='API Usage' path='/#api-usage' icon={<CodeIcon size={22} className="mr-2"/>}/>
                    <NavbarItem visibility={'visibleOnSmallScreen'} isExternalLink={true} label='Github Repository' path='https://github.com/MeysamShams/Yourl' icon={<MarkGithubIcon size={22} className="mr-2"/>}/>
            </div>
        </>
    )
}