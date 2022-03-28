import { Navbar } from "components/main/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "routes/Home"
import { Register } from "routes/auth/Register"
import { Login } from "routes/auth/Login"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout=()=>{
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/:hash" element={<h1 className="mt-44">Register page</h1>}/>
            <Route path="*" element={<h1 className="mt-44">404</h1>} />
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