import React from 'react';
import './Spinner.css';
const Spinner = () => {
    return (
        <div className='max-h-screen'>
            <div className='p-10'></div>
            <div className="flex justify-center items-center">
                <span class="loader"></span>
            </div>
        </div>

    );
};

export default Spinner;