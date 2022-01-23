import { useState } from 'react';
import { useParams } from "react-router";
import axios from "axios"
import { API } from '../api';

export default function ConfirmEmail(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { key } = useParams()
    console.log(key)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.post(API.auth.verifyEmail, {key})
            .then(res => setSuccess(true))
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <div>
            {success && "Your email has been verified! You can now login"}
            {loading && "Loading..."}
            <form onSubmit={handleSubmit}>
                <button className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 shadow-md rounded-lg" type="submit">Verify Email</button>  
            </form>
        </div>
    )
}