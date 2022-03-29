import { Navbar } from "components/main/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "pages/Home"
import { Auth } from "pages/Auth"

export const MainLayout=()=>{
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
        </Routes>
    </>
}