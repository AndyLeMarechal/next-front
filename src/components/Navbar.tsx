'use client'
import Link from "next/link.js"
import { usePathname } from "next/navigation"
import { navLink } from "@/constants"
import { NavbarProfile } from "@/components"

const Navbar:React.FC = () => {
    const pathname = usePathname()

    return (
        <>
             <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://ocheerz.ovh/static/media/ocheerz_logo.8d1a9a7d7cdcffcb008c.svg" className="h-20" alt="Ocheerz Logo" />
                    </Link>
                    <NavbarProfile/>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navLink.map(({link, name, type}) => (
                                <Link
                                    key={name}
                                    href={{
                                        pathname: `/${link}`,
                                        query:{
                                            type: type,
                                            link: link
                                        }
                                    }}
                                    className={`${pathname == link ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>
                                        {name}
                                    </Link>
                            ))}
                        </ul>
                    </div>
                    </div>
                    </nav>
        </>
    )
}

export default Navbar;