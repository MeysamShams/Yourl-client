import {PersonAddIcon} from '@primer/octicons-react'
import { Button } from 'components/formElements/Button';
import { InputElement } from 'components/formElements/InputElement';
import {useFormik} from 'formik'
import { Link } from 'react-router-dom';
import { registerFormSchema } from 'features/validations/authSchema'


export const RegisterForm=()=>{
    const formik=useFormik({
        initialValues:{
            username:"",
            password:"",
            confirmPassword:""
        },
        validationSchema:registerFormSchema,
        onSubmit:values=>console.log(values)
    })
    return(
        <div className="container mx-auto mt-28 px-4">
            <div className='w-full lg:w-96 md:w-4/6 bg-white p-5 mx-auto rounded-md'>
                <div className='text-center'>
                    <PersonAddIcon  size={44} className="block h-12 w-12 bg-yellow-300 rounded-full text-black mb-4"/>
                </div>
                <h1 className="font-bold text-gray-500 text-center">CREATE AN ACCOUNT</h1>
                <form onSubmit={formik.handleSubmit}>

                    <InputElement name='username' value={formik.values.username} onChange={formik.handleChange} isTouched={formik.touched.username} errorMsg={formik.errors.username} type="text" key={1} placeholder='Username (At least 6 characters)'/>
                    
                    <InputElement name='password' value={formik.values.password} onChange={formik.handleChange} isTouched={formik.touched.password} errorMsg={formik.errors.password} type="password" key={2} placeholder='Password (At least 6 characters)'/>
                    
                    <InputElement name='confirmPassword' value={formik.values.confirmPassword} isTouched={formik.touched.confirmPassword} errorMsg={formik.errors.confirmPassword} onChange={formik.handleChange} key={3} type="password" placeholder='Confirm password'/>
                    
                    <Button type={'submit'} isLoading={formik.isSubmitting} fullWidth={true} >Rgister</Button>
                </form>
                <p className='text-gray-400 text-sm text-center mt-2 mb-2 '>Already have an account ? <Link to="/auth/login" className='text-violet-900 '>Sign In</Link></p>
            </div>
        </div>
    );
}