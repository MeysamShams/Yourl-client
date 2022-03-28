import { MainLayout } from "layouts/MainLaytout";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RedirectToUrl } from "pages/RedirectToUrl";

export const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*"  element={<MainLayout/>} />
                <Route path="/:hash"  element={<RedirectToUrl/>} />      
            </Routes>
        </BrowserRouter>
    );
}