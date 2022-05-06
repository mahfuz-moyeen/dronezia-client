import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className=' bg-slate-800 h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
            <span class="not-found block"></span>
            <h1 className='text-4xl mt-5 lg:text-8xl font-semibold text-gray-400 text-center'>404</h1>
            <h1 className='text-2xl lg:text-4xl font-semibold mt-5 text-gray-400 text-center'>Page Not Fount</h1>
            <Link to='/' className='p-1 flex items-center text-info hover:text-primary my-5'><ArrowLeftIcon className='w-10 h-10'/> Back to home</Link>
        </div>
        </div>
    );
};

export default NotFound;