import * as Yup from 'yup'

export const loginFormSchema=Yup.object().shape({
    username:Yup.string().required().min(6,"Username must be at least 6 characters !").max(50,"Too long!"),
    password:Yup.string().required().min(6,"Your password is too short !").max(100,"Too long!"),
}) 

export const registerFormSchema=loginFormSchema.shape({
    confirmPassword:Yup.string().required("Please confirm your password.").oneOf([Yup.ref('password')],'Your passwords do not match.')
})