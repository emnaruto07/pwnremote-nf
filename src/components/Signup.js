import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios"
import { API } from '../api';

export default function Signup(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    function handleSubmit(values, { resetForm }) {
        setLoading(true)
        axios.post(API.auth.signup, values)
            .then(res => {
                resetForm()
                setSuccess(true)
            })          
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <div>
            {success && "You will receive a verification email soon."}
            {loading && "Loading..."}
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <div className='mx-auto py-7 px-7'>
                        <Form>
                            <Field name="email">
                                    {({ field, form }) => (
                                        <label className="block">
                                        <span className="text-gray-700">Email</span>
                                        <input
                                        {...field}
                                        type="email"
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
                            {/* <label htmlFor="username">Username</label>
                            <Field id="username" name="username" placeholder="username" /> */}
                            {touched.username && errors.username && <div>{errors.username}</div>}

                            {/* <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" /> */}
                            <Field name="password1">
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
                            {touched.password1 && errors.password1 && <div>{errors.password1}</div>}
                            <Field name="password2">
                                {({ field, form }) => (
                                    <label className="block">
                                    <span className="text-gray-700">Confirm Password</span>
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
                            {touched.password2 && errors.password2 && <div>{errors.password2}</div>}
                            
                            <button className="mt-2 bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 shadow-md rounded-lg" type="submit">Signup</button>
                        </Form>
                    </div>
                
                )}    
            </Formik>
        </div>
    )
}