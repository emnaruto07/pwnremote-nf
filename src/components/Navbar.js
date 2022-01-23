import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { API } from '../api';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import pwn from '../assets/PwnRemote.png';


export default function Navbar(){
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(){
        axios.post(API.auth.logout)
        .then(res => {
            logout()
            navigate("/login")
        })
       
    }

    return (
        // <nav className='max-w-6xl mx-auto py-5 px-4 border-b border-gray-200'>
        //     <ul className='flex items-center justify-between'>
        //         <div className='flex items-center'>
        //             <li className='ml-3 text-gray-600'>
        //                 <Link className='hover:text-green-600 hover:bg-white border-solid border-2 border-green-600 shadow-xl px-4 py-2 bg-green-600 text-white rounded-lg font-semibold' to="/">Jobs</Link>
        //             </li>
                    
        //             <li className='ml-3 text-gray-600'>
        //                 <Link className='hover:text-red-500 hover:bg-white border-solid border-2 border-red-500 shadow-xl px-4 py-2 bg-red-500 text-white rounded-lg font-semibold' to="/create-job">Post a Job</Link>
        //             </li>
        //         </div>
        //         <div className='text-center text-4xl font-bold text-red-600'>
        //             uid=0(pwnremote)
        //         </div>
        //         <div className='flex items-center'>
        //             {user ? (
        //                 <div className='flex items-center'>
        //                     {/* <li className='px-3 text-gray-600'>
        //                         <Link className='hover:text-blue-600' to="#">Hi {user.id},</Link>
        //                     </li> */}
        //                     <li className='px-3 text-gray-600'>
        //                         <button className='bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 shadow-xl rounded-lg' onClick={handleSubmit}>Logout</button>
        //                     </li>
        //                 </div>
        //             ):  (
        //                 <div className='flex items-center'>
        //                 <li className='px-3 text-gray-600'>
        //                     <Link className='bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 shadow-xl rounded-lg' to="/login">Login</Link>
        //                 </li>
        //                 <li className='px-3 text-gray-600'>
        //                     <Link className='hover:text-white hover:bg-green-600 border-solid border-2 border-green-600 px-4 py-2 shadow-xl bg-white text-green-600 rounded-lg font-semibold ml-0' to="/signup">Signup</Link>
        //                 </li>
        //                 </div>
                       
        //             )}
        //         </div>
               
                
        //     </ul>
        // </nav>
          <nav className="bg-white shadow-lg">
            <div className="px-4 max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <Link className="flex items-center py-4 px-2" to="/" >
                                <img className="h-8 w-8 mr-2" src={pwn} alt="pwn" />
                                <span className="font-semibold text-gray-500 text-xl">Pwnremote</span>
                            </Link>
                        </div>
                        <div className="hidden items-center md:flex space-x-1">
                            <Link className="hover:text-green-700 hover:bg-white border-solid border-2 border-green-700 shadow-xl px-4 py-2 bg-green-700 text-white rounded-lg font-semibold" to="/">Jobs</Link>
                            <Link className="hover:text-red-500 hover:bg-white border-solid border-2 border-red-500 shadow-xl px-4 py-2 bg-red-500 text-white rounded-lg font-semibold" to="/create-job">Post a job</Link>
                        </div>
                                 
                    </div>
                    <div className="flex items-center space-x-1">
                        {user ? (
                            <button className='bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white py-2 px-4 shadow-xl rounded-lg font-semibold' onClick={handleSubmit}>Logout</button>
                            
                        ):  (
                            <div className='flex items-center space-x-1'>
                                <Link className="bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white py-2 px-4 shadow-xl rounded-lg font-semibold" to="/login">Login</Link>
                                <Link className="hover:text-white hover:bg-green-700 border-solid border-2 border-green-700 px-4 py-2 shadow-xl bg-white text-green-700 rounded-lg font-semibold" to="/signup">Signup</Link>
                            </div>
                        )}
                    </div> 
                </div>
                 
            </div>
      </nav>
    )
}


// export default function Navbar(){