'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {MenuProfileIsNotLogged, MenuProfileIsLogged} from '@/components'
import { useRouter } from 'next/navigation.js'



const NavbarProfile = () => {

    const router = useRouter()


    const [isUserAuthenticated, setisUserAuthenticated]= useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if(token){
            setisUserAuthenticated(true)
            router.refresh()
        }
        else{
            setisUserAuthenticated(false)
        }
    })

  return (
    <>
        <div className=" items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse static">
            <p className=" peer px-2 py-2 text-white text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        {isUserAuthenticated && (
                            <>
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="" alt="user photo"></img>
                               
                            </>
                        )}
                        {!isUserAuthenticated && (
                            <>
                                
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="" alt="user photo"></img>
                                
                            </>
                        )}
                    </p>
                    
                            {isUserAuthenticated && (
                                <>
                                    <MenuProfileIsLogged/>
                                </>
                            )}
                            {!isUserAuthenticated && (
                                <>
                                    <MenuProfileIsNotLogged/>
                                </>
                            )}
                </div>
    </>
  )
}

export default NavbarProfile