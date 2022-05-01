import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className='flex gap-3 justify-center my-3'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/blogs' >Blogs</Link>
            <Link to='/sign-in' >Sign in</Link>
            <Link to='/sign-up' >Sign up</Link>
        </div>
    );
};

export default Menubar;