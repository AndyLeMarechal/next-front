'use client'
import React, { FC } from 'react'
import { useState } from 'react'
import {ModalLogin, ModalSignUp} from '@/components'


export default function MenuProfileIsNotLogged(){
    
    const [showModalSignUp, setshowModalSignUp] = useState(false)

    function toggleModalSignUp(){
        setshowModalSignUp(!showModalSignUp)
    }
    

    const [showModalLogin, setshowModalLogin] = useState(false)

    const toggleModalLogin = () => {
        setshowModalLogin(!showModalLogin)

    }
  return (
    <>
        <div className={`hidden peer-hover:flex hover:flex bg-white drop-shadow-lg absolute`} id="user-dropdown"  data-popper-placement="bottom"> 
            <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <button onClick={() => toggleModalLogin()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</button>
                    </li>
                    <li>
                        <button onClick={() => toggleModalSignUp()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Up</button>
                    </li>
            </ul>
            
        </div>
      
        <ModalLogin  open={showModalLogin} onClose={toggleModalLogin} />
        <ModalSignUp open={showModalSignUp} onClose={toggleModalSignUp}/>
      
        
    </>
  )
}
