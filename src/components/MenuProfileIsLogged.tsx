
import Link from 'next/link.js'
import React, { FC } from 'react'

interface MenuProfileIsLogged{
    open: boolean,
    onClose: () => void
}

export default function MenuProfileIsLogged(){


    const username = sessionStorage.getItem('username')
    const handleClickOnLogout = () => {
        const token = sessionStorage.getItem('token')
        if(token){
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('id')
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('role')
        }
    }

  return (
    <>
            <div className={`hidden peer-hover:flex hover:flex bg-white drop-shadow-lg absolute`} id="user-dropdown"  data-popper-placement="bottom"> 

            <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <span className="block text-sm text-gray-900 dark:text-white">{username}</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                </li>
                <li>
                    <Link onClick={() => handleClickOnLogout()} href="http://localhost:3000/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</Link>
                </li>
            </ul>
            </div>
    </>
  )
}
