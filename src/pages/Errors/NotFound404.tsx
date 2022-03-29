import notFound from 'assets/images/not-found.svg'
import { Link } from 'react-router-dom'

export const NotFound404=()=>{
    return(
        <div className='text-center mt-12'>  
        <img src={notFound} className="mx-auto" alt="" />
        <h1 className='text-2xl text-gray-500 mb-7'>Sorry, Page Not Found :(</h1>
        <Link to="/" className='btn mx-auto bg-violet-500 border-0' >Back to the home page</Link>
        </div>
    )
}