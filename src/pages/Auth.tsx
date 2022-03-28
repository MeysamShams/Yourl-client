import { LoginForm } from "components/auth/LoginForm"
import { RegisterForm } from "components/auth/RegisterForm"
import { Route, Routes } from "react-router-dom"

export const Auth=()=>{
    return(
        <Routes>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
        </Routes>
    )
}