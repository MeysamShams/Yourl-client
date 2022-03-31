import { Navbar } from "components/main/navbar/Navbar"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "pages/Home"
import { Auth } from "pages/Auth"
import { useContext } from "react"
import AuthContext from "features/context/AuthContext"

export const MainLayout=()=>{
    const authCtx=useContext(AuthContext);
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/*" element={authCtx.isLoggedIn? <Navigate to="/profile" replace={true}/> : <Auth/>}/>
        </Routes>
    </>
}