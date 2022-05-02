import { useState } from 'react'
import CustomLink from '../CustomLink/CustomLink'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import logo from '../../../image/logo.png'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

const Menubar = () => {

    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);
    const [user] = useAuthState(auth);


    return (
        <nav className="bg-white lg:bg-opacity-90 sticky-top w-full top-0 z-20 shadow-md">
            <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">

                <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <Link to="/">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </Link>

                    <div className="lg:hidden">
                        <button onClick={() => setOpen(!open)}
                        >
                            {
                                open ? (

                                    <XIcon className="h-5 w-5 " />
                                ) : (
                                    <MenuAlt1Icon className="h-5 w-5 text-blue-500" />
                                )
                            }
                        </button>
                    </div>
                </div>
                {/* mobile menu  (h-screen off)  */}
                <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${open ? ' pb-20 overflow-auto pr-4' : 'hidden'}`}>

                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">

                            {
                                user ?

                                    <div className='relative '>
                                        <div className="flex items-center space-x-4">
                                            <button className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                                                onClick={() => setProfile(!profile)}
                                            >
                                                {
                                                    user?.photoURL ?
                                                        <img
                                                            src={user.photoURL}
                                                            className="w-full h-full rounded-full"
                                                            alt='userPhoto'
                                                        />
                                                        :
                                                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                                                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                                        </div>
                                                }
                                            </button>
                                            <div className="lg:hidden">
                                                <span className="block">{user?.displayName}</span>
                                                <span className="block text-sm text-gray-500">{user?.email}</span>
                                            </div>
                                        </div>
                                        <ul
                                            className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${profile ? '' : 'lg:hidden'}`}>
                                            <li>
                                                <Link
                                                    className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                                                    to='/user-profile'
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <p
                                                    className="cursor-pointer text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                                                >
                                                    <button onClick={() => signOut(auth)}>
                                                        sign out
                                                    </button>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    :

                                    <>
                                        <li className="mt-4 lg:mt-0">
                                            <CustomLink to="/sign-in" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-700 rounded-md lg:rounded-none block lg:inline lg:border-0">
                                                Login
                                            </CustomLink>
                                        </li>
                                        <li className="mt-8 lg:mt-0">
                                            <Link to="/sign-up" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>

                    <div className="flex-1">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <CustomLink to="/" className="py-3 px-4 text-center text-gray-600 hover:text-indigo-600">
                                    Home
                                </CustomLink>
                            </li>
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <CustomLink to="/inventory" className="py-3 px-4 text-center text-gray-600 hover:text-indigo-600">
                                Inventory
                                </CustomLink>
                            </li>
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <CustomLink to="/blogs" className="py-3 px-4 text-center text-gray-600 hover:text-indigo-600">
                                    Blogs
                                </CustomLink>
                            </li>
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <CustomLink to="/about" className="py-3 px-4 text-center text-gray-600 hover:text-indigo-600">
                                    About
                                </CustomLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Menubar;