import {SignInIcon} from '@primer/octicons-react'
import { Button } from 'components/formElements/Button';
import { InputElement } from 'components/formElements/InputElement';
import { useFormik } from 'formik';
import { loginFormSchema } from 'models/validationSchema/authSchema';
import { Link } from 'react-router-dom';
export const Login=()=>{

    const formik=useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        validateOnChange:false,
        validationSchema:loginFormSchema,
        onSubmit:values=>console.log(values)
    })
    
    return(
        <div className="container mx-auto mt-28 px-4">
            <div className='w-full lg:w-96 md:w-4/6 bg-white p-5 mx-auto rounded-md'>
                <div className='text-center'>
                    <SignInIcon  size={44} className="block h-12 w-12 bg-yellow-300 rounded-full text-black mb-4"/>
                </div>
                <h1 className="font-bold text-gray-500 text-center">LOG IN TO YOUR ACCOUNT</h1>
                <form onSubmit={formik.handleSubmit}>

                    <InputElement name='username' value={formik.values.username} onChange={formik.handleChange} errorMsg={formik.errors.username} type="text" key={1} placeholder='Username (At least 6 characters)'/>
                    
                    <InputElement name='password' value={formik.values.password} onChange={formik.handleChange} errorMsg={formik.errors.password} type="password" key={2} placeholder='Password (At least 6 characters)'/>
                    
                    <Button type={'submit'} isLoading={formik.isSubmitting} fullWidth={true} >Logn In</Button>
                </form>
                <p className='text-gray-400 text-sm text-center mt-2 mb-2 '>Don't have account ? <Link to="/auth/register" className='text-violet-900 '>Register Now</Link></p>
            </div>
        </div>
    );
}