import { ReactNode } from "react";
import './header.css';

export const CurvedHeader=({children}:{children: ReactNode})=>{
    return(
        <header className="main-header mt-16">{children}</header>
    );
}