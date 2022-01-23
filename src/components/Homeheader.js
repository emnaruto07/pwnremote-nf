import React from 'react'
import Typewriter from 'typewriter-effect';
import Banner from "../assets/banner.jpg";


function Homeheader() {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     }, 10000);
    //     return () => clearInterval(interval);
    //  }, []);

    return (
        <div className="py-20 px-2 rounded-lg max-w-6xl mx-auto" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Banner})`}}>
            <div className='flex justify-center items-center'>
            <p className='text-red-500 font-bold text-4xl'>Apply</p>
            <span className='items-center text-4xl ml-2 font-semibold text-white'>
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("WebApp Security")
                    .deleteAll()
                    .typeString("Researcher")
                    .deleteAll()
                    .typeString("SOC/SIEM")
                    .deleteAll()
                    .typeString("Pentesting")
                    .deleteAll()
                    .typeString("Consulting")
                    .deleteAll()
                    .typeString("Quality Assurance")
                    .deleteAll()
                    .typeString("Forensics")
                    .deleteAll()
                    .typeString("Mobile Security")
                    .deleteAll()
                    .typeString("Cloud Security")
                    .deleteAll()
                    .typeString("Infrastructure Security")
                    .deleteAll()
                    .typeString("Code Source Review")
                    .deleteAll()
                    .typeString("Hardware/IOT")
                    .deleteAll()
                    .typeString("DevOps/DevSecOps")
                    .deleteAll()
                    .typeString("Sales/Marketing")
                    .deleteAll()
                    .start();
                    }}
                    />
            </span>
            </div>           
        </div>
        
    )
}

export default Homeheader