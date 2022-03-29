import * as Yup from 'yup'

export const urlShortenerSchema=Yup.object().shape({
    url:Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"URL is not valid!").required("URL is a required field !")
})