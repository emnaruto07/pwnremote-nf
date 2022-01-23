import React from 'react'
import { Link } from 'react-router-dom';
import pwn from '../assets/PwnRemote.png';

function Footer() {
    return (
        <footer className="pt-40 px-4 divide max-w-6xl mx-auto text-center">
            <div className="container flex flex-col justify-center mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div>
                    <Link to="/" className="flex sm:justify-center" >
                        <div className="flex h-12 w-12">
                            <img src={pwn} alt="logo" className="h-10 w-10 mr-2" />
                        </div>
                        <span className="font-semibold text-gray-500 text-2xl">
                            Pwnremote
                        </span>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 text-sm sm:grid-cols-4 mx-auto w-auto">
                <div className="space-y-3">
                    <h3 className="text-red-500 uppercase font-medium">Support</h3>
                    <ul className='space-y-1 font-medium'>
                        <li>
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li>
                            <Link to="/faqs" className="">Questions?</Link>
                        </li>
                        <li>
                            <Link to="/about" className="">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3 font-medium">
                    <h3 className="text-red-500 uppercase tracking-wide font-medium">Company</h3>
                    <ul className='space-y-1 font-medium'>
                        <li>
                            <Link to="/privacy" className="">Privacy</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3 font-medium">
                    <h3 className="text-red-500 uppercase tracking-wide font-medium">Hackers</h3>
                    <ul className='space-y-1 font-medium'>
                        <li>
                            <Link to="/learn-hacking" className="">Learn Hacking?</Link>
                        </li>
                        {/* <li>
                            <Link to="/about" className="">Terms of Service</Link>
                        </li> */}
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-red-500 uppercase tracking-wide font-medium">Contact Us</h3>
                    <ul className='space-y-1 font-medium'>
                        <li className='flex'>
                            <h2 className="font-semibold">Email:</h2><span className='ml-1'>support@pwnremote.com</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="py-6 text-center text-red-500 text-sm font-medium">
                2022 P2PSEC Pte Ltd. All rights reserved.
            </div>
            <div className='text-center text-sm'>
                Made with ❤️ by <span><a className="border-2 border-solid border-black font-bold rounded-lg bg-black text-white" href="https://twitter.com/emnaruto07">Shazeb</a></span>
            </div>
        </footer>   
    )
}

export default Footer


// <footer className="mb-auto border-t border-gray-200">
    //     <div
    //         className="
    //         container
    //         flex flex-col flex-wrap
    //         px-4
    //         py-6
    //         mt-4
    //         mx-auto
    //         md:items-center
    //         lg:items-start
    //         md:flex-row md:flex-nowrap
    //         "
    //     >
    //         <div
    //         className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
    //         >
    //         <td className="py-5 px-3">
    //             <img src={pwn} className="h-40 w-40 border-2" alt="" />
    //         </td> 
    //         <h2
    //             className="
    //             flex
    //             items-center
    //             justify-center
    //             text-4xl
    //             font-bold
    //             text-red-500
    //             md:justify-start
    //             "
    //         >
    //             pwnremote
    //         </h2>
    //             <span>by <a className="border-2 border-solid border-amber-600 font-bold bg-amber-600 text-white" href="https://twitter.com/emnaruto07">@emnaruto07</a></span>
    //         </div>
    //         <div className="justify-between w-full mt-4 text-center lg:flex">
    //         <div className="w-full px-4 lg:w-1/3 md:w-1/2">
    //             <h2 className="mb-2 font-bold underline text-gray-900">
    //             Support
    //             </h2>
    //             <ul className="mb-8 space-y-2 text-sm list-none">
    //             <li>
    //                 <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/faqs" className="text-gray-600 hover:text-gray-800">Questions?</Link>
    //             </li>
    //             <li>
    //                 <Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link>
    //             </li>
                
    //             </ul>
    //         </div>
    //         <div className="w-full px-4 lg:w-1/3 md:w-1/2">
    //             <h2 className="mb-2 font-bold underline text-gray-900">
    //             Legal
    //             </h2>
    //             <ul className="mb-8 space-y-2 text-sm list-none">
    //             <li>
    //                 <Link to="/terms" className="text-gray-600 hover:text-gray-800">Terms Of Service</Link>
    //             </li>
    //             <li>
    //                 <Link to="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
    //             </li>
    //             <li>
    //                 <Link to="/learn-hacking" className="text-gray-600 hover:text-gray-800">Learn Hacking?</Link>
    //             </li>
                
    //             </ul>
    //         </div>
    //         <div className="w-full px-4 lg:w-1/3 md:w-1/2">
    //             <h2 className="mb-2 font-bold underline text-gray-900">
    //             Contact Us
    //             </h2>
    //             <ul className="mb-8 space-y-2 text-sm list-none">
    //                 <li>
    //                     <h2 className="text-black font-semibold">Email: </h2><p>support@pwnremote.com</p>
    //                 </li>
    //             </ul>
    //         </div>
    //         </div>
    //     </div>
    //     <div className="flex justify-center">
    //         <p className="text-base text-gray-400">
    //         All rights reserved by @ pwnremote 2021
    //         </p>
    //     </div>
    // </footer>