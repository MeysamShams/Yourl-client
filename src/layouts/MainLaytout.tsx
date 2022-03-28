import { Navbar } from "components/main/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Auth } from "pages/Auth"

export const MainLayout=()=>{
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
}