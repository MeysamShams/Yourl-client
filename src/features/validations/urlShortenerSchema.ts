import * as Yup from 'yup'

export const urlShortenerSchema=Yup.object().shape({
    url:Yup.string().url("Please enter a valid URL !").required("URL is a required field !")
})