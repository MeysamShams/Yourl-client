import { ReactNode } from "react";

export const CurvedHeader=({children}:{children: ReactNode})=>{
    return(
        <header className="main-header mt-16">{children}</header>
    );
}