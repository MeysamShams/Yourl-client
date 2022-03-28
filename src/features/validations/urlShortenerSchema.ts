import * as Yup from 'yup'

export const urlShortenerSchema=Yup.object().shape({
    url:Yup.string().matches(/^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,"Please enter a valid URL !").required("URL is a required field !")
})