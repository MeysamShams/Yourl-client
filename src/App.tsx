import { MainLayout } from "layouts/MainLaytout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { RedirectToUrl } from "pages/RedirectToUrl";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NotFound404 } from "pages/Errors/NotFound404";
import { ServerUnavailable503 } from "pages/Errors/ServerUnavailable503";
import { ProfileLayout } from "layouts/ProfileLayout";
import { useContext } from "react";
import AuthContext from "features/context/AuthContext";
export const App=()=>{

    const authCtx=useContext(AuthContext)
    
    return (
        <>
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
        <BrowserRouter>
            <Routes>
                <Route path="/*"  element={<MainLayout/>} />
                <Route path="/profile/*"  element={authCtx.isLoggedIn?<ProfileLayout/>:<Navigate to="/auth/login"/>} />
                <Route path="/404"  element={<NotFound404/>} />
                <Route path="/500"  element={<ServerUnavailable503/>} />
                <Route path="/:shortUrl" element={<RedirectToUrl/>} />      
                <Route path="*" element={<NotFound404/>} />

            </Routes>
        </BrowserRouter>
        </>
    );
}