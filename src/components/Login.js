import { Formik, Field, Form } from 'formik';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { API } from '../api';
import { AuthContext } from '../contexts/AuthContext';

export default function Login(){
    const [loading, setLoading] = useState(false)
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(values) {
        setLoading(true)
        axios.post(API.auth.login, values)
            .then(res => login(res.data.key))
                navigate("/")
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <div>
            {loading && "Loading..."}
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <div className='mx-auto py-7 px-7'>
                        <Form>
                            <Field name="username">
                                {({ field, form }) => (
                                    <label className="block">
                                    <span className="text-gray-700">Username</span>
                                    <input
                                    {...field}
                                    type="text"
                                    className="
                                        mt-1
                                        block
                                        w-full
                                        rounded-md
                                        bg-gray-100
                                        border-transparent
                                        focus:border-gray-500 focus:bg-white focus:ring-0
                                    "
                                    />
                                </label>
                                )}
                            </Field>
                            {touched.username && errors.username && <div>{errors.username}</div>}

                            <Field name="password">
                                {({ field, form }) => (
                                    <label className="block">
                                    <span className="text-gray-700">Password</span>
                                    <input
                                    {...field}
                                    type="password"
                                    className="
                                        mt-1
                                        block
                                        w-full
                                        rounded-md
                                        bg-gray-100
                                        border-transparent
                                        focus:border-gray-500 focus:bg-white focus:ring-0
                                    "
                                    />
                                </label>
                                )}
                            </Field>
                            {touched.password && errors.password && <div>{errors.password}</div>}
                            
                            <button className="mt-2 bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 shadow-xl rounded-lg" type="submit">Login</button>
                        </Form>
                    </div>
                
                )}    
            </Formik>
        </div>
    )
}