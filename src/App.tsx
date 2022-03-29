import { MainLayout } from "layouts/MainLaytout";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RedirectToUrl } from "pages/RedirectToUrl";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NotFound404 } from "pages/Errors/NotFound404";
import { ServerUnavailable503 } from "pages/Errors/ServerUnavailable503";
export const App=()=>{
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
                <Route path="/panel"  element={<h1>admin panel</h1>} />
                <Route path="/404"  element={<NotFound404/>} />
                <Route path="/500"  element={<ServerUnavailable503/>} />
                <Route path="/:shortUrl" element={<RedirectToUrl/>} />      
                <Route path="*" element={<NotFound404/>} />

            </Routes>
        </BrowserRouter>
        </>
    );
}