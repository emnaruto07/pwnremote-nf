import React from 'react'

function Resources() {
    return (
        <div className='border-solid border-2 shadow-xl p-4 rounded-lg'>
            <h1 className='font-bold text-center text-2xl underline mb-2'>Want to learn Hacking?</h1>
            <h2 className='font-bold text-xl'>Here are some of the resources:</h2>
            <ol> 
                <li className='font-normal'><a href="https://portswigger.net/web-security">1. Web Security</a></li>
                <li className='font-normal'><a href="https://tryhackme.com/">2. Try hackme</a></li>
            </ol>
            
        </div>
    )
}


export default Resources
