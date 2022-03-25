import { NavLink } from "react-router-dom";
import logo from 'assets/images/logo.png'

export const NavbarLogo=()=>{
    return(
        <NavLink to="/" className="flex items-center mr-5">
            <img src={logo} className="w-10 mr-3"  alt="logo" />
            <p className='text-white hidden lg:block font-bold text-lg'>YOURL</p><span className='text-violet-100 hidden lg:block text-sm'> Shortener</span>
        </NavLink>
    );
}