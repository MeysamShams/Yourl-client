import * as Yup from 'yup'

export const registerFormSchema=Yup.object().shape({
    username:Yup.string().required().min(6,"Username must be at least 6 characters !").max(50,"Too long!"),
    password:Yup.string().required().min(6,"Your password is too short !").max(100,"Too long!"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password')],'Your passwords do not match.')
}) 

export const loginFormSchema=Yup.object().shape({
    username:Yup.string().min(6,"Username must be at least 6 characters !").max(50,"Too long!"),
    password:Yup.string().min(6,"Your password is too short !").max(100,"Too long!"),
}) 