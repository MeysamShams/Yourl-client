import {PersonAddIcon} from '@primer/octicons-react'
import { Link } from 'react-router-dom';
export const Register=()=>{
    return(
        <div className="container mx-auto mt-28 px-4">
            <div className='w-full lg:w-96 md:w-4/6 bg-white p-5 text-center mx-auto rounded-md'>
                <PersonAddIcon  size={44} className="block h-12 w-12 bg-yellow-300 rounded-full text-black mb-4"/>
                <h1 className="font-bold text-gray-500 text-center">CREATE AN ACCOUNT</h1>
                <div className='mt-4'>
                <input type="text" className='input rounded-md bg-gray-100 w-full' placeholder='Username (only string)' />
                </div>
                <div className='mt-4'>
                <input type="text" className='input rounded-md bg-gray-100 w-full' placeholder='Password (min 6 char)' />
                </div>
                <div className='mt-4'>
                <input type="text" className='input rounded-md bg-gray-100 w-full' placeholder='Confirm Password' />
                </div>
                <button className='btn btn-block my-5 bg-violet-500 hover:bg-violet-800 border-0 '>Register</button>
                <p className='text-gray-400 text-sm text-center mt-2 mb-2 '>Already have an account ? <Link to="/auth/login" className='text-violet-900 '>Sign In</Link></p>
            </div>

      </div>
    );
}