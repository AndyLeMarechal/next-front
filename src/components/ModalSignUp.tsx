'use client'
import React, { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

interface ModalSignUpProps {
    open: boolean,
    onClose: () => void
}

export default function ModalSignUp(props: ModalSignUpProps): ReturnType<FC> {

    const url = process.env.NEXT_PUBLIC_API_URL

    const [usernameValue, setusernameValue] = useState('')
    const [emailValue, setemailValue] = useState('')
    const [firstnameValue, setfirstnameValue] = useState('')
    const [lastnameValue, setlastnameValue] = useState('')
    const [passwordValue, setpasswordValue] = useState('')
    const [passwordConfirmValue, setpasswordConfirmValue]= useState('')

    const [valided, setvalided] = useState(Number)
    const [error, seterror] = useState('')

    function resetValue(){
        setusernameValue('')
        setemailValue('')
        setfirstnameValue('')
        setlastnameValue('')
        setpasswordValue('')
        setpasswordConfirmValue('')
        props.onClose()
    }

// si je click sur background sa ferme mais si je click sur background et holla tu laisse la modal


    const handleSubmitSignUp = (e: React.FormEvent) => {
        e.preventDefault();

            axios.post(`${url}/signUp`,{
                username: usernameValue,
                email: emailValue,
                firstname: firstnameValue,
                lastname: lastnameValue,
                password: passwordValue,
                passwordConfirm: passwordConfirmValue
            })
                    .then(res => {
                    if(res.status == 200){
                        console.log(res)
                        setvalided(res.data.message)
                        resetValue()
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
    
        <div onClick={() => props.onClose()} id="authentication-modal" className={` ${"modalSignUp"} ${props.open ? "block" : "hidden"} overflow-x-hidden backdrop-blur-xl bg-black/30 overflow-y-auto fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex`} aria-modal="true" role="dialog">
                                <div onClick={e => e.stopPropagation()}  id='modal' className={` relative p-4 w-full max-w-md max-h-full  `}>
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
                                        <form onSubmit={handleSubmitSignUp} id="form" className="space-y-4" action="#">
                                        <div>
                                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                                <input type="text" name="username" id="username" placeholder="Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={usernameValue}
                                                onChange={e => {setusernameValue(e.currentTarget.value)}}
                                                required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                                                value={emailValue}
                                                onChange={e => {setemailValue(e.currentTarget.value)}} required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                                                <input type="text" name="firstname" id="firstname" placeholder="First Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={firstnameValue}
                                                onChange={e => {setfirstnameValue(e.currentTarget.value)}}
                                                required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                                                <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={lastnameValue}
                                                onChange={e => {setlastnameValue(e.currentTarget.value)}}
                                                required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={passwordValue}
                                                onChange={e => {setpasswordValue(e.currentTarget.value)}}
                                                required></input>
                                            </div>
                                            <div>
                                                <label htmlFor="passwordConfirm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password confirm</label>
                                                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                value={passwordConfirmValue}
                                                onChange={e => {setpasswordConfirmValue(e.currentTarget.value)}}
                                                required></input>
                                            </div>
                                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create your account account</button>
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                Registered? <a  href="#" className="text-blue-700 hover:underline dark:text-blue-500">Go login !</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}
