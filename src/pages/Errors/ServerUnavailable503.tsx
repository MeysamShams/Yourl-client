import icon from 'assets/images/process.svg'
import { Link } from 'react-router-dom'

export const ServerUnavailable503=()=>{
    return(
        <div className='text-center mt-12'>  
        <img src={icon} className="mx-auto" alt="" />
        <h1 className='text-2xl text-gray-500 mb-7'>Sorry, server is currently unavailable :(</h1>
        <Link to="/" className='btn mx-auto bg-violet-500 border-0' >Back to the home page</Link>
        </div>
    )
}
