'use client'
import React, { FC } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link.js'


interface ModalLogin {
    open: boolean,
    onClose: () => void
}

export default function ModalLogin(props: ModalLogin): ReturnType<FC> {

    const [emailValue, setemailValue] = useState('');
    const [passwordValue, setpasswordValue] = useState('');
    const [remember, setRemember] = useState(false);

    const [valided, setvalided] = useState(Number)
    const [error, seterror] = useState('')


    function resetValue(){
        props.onClose()
        setemailValue('')
        setpasswordValue('')
    }

    const handleClickRemember = () => {
        setRemember(!remember)
    }

    const handleSubmitLogin = (e: React.FormEvent) => {
        console.log(e)
        e.preventDefault();

            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`,{
                email: emailValue,
                password: passwordValue,
                remember: remember
            })
        .then(res => {
            console.log(res)
            sessionStorage.setItem('token', res.data.access_token)
            sessionStorage.setItem('id', res.data.id)
            sessionStorage.setItem('username', res.data.username)
            sessionStorage.setItem('role', res.data.role)
            if(res.status == 200){
                setvalided(res.data.message)
                setemailValue('')
                setpasswordValue('')
                props.onClose()
            }
        })
        .catch(err => {
            console.log(err)
            seterror(err.response.data.error)
        })
    }


  return (
    <>
         <div onClick={() => props.onClose()}  id="authentication-modal"  className={` ${"modalLogin"} ${props.open ? "block": "hidden"} backdrop-blur-xl overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex `} aria-modal="true" role="dialog">
                        <div onClick={e => e.stopPropagation()}  className={`relative p-4 w-full max-w-md max-h-full  `}>
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <button onClick={resetValue} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg  className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5">
                                <form onSubmit={handleSubmitLogin} id="form" className="space-y-4" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                                        value={emailValue}
                                        onChange={e => {setemailValue(e.currentTarget.value)}} required></input>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        value={passwordValue}
                                        onChange={e => {setpasswordValue(e.currentTarget.value)}}
                                        required></input>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" onClick={() => handleClickRemember()} type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"></input>
                                            </div>
                                            <label  htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                        </div>
                                        <button  className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</button>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <button  className="text-blue-700 hover:underline dark:text-blue-500">Create account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                        </div>
    </>
  )
}
