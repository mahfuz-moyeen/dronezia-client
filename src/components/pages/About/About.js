import React from 'react';
import 'flowbite/plugin'
const About = () => {
    return (
        <div>
            <h1 className='text-center my-10 text-4xl'>About</h1>


            <label for="my-modal" className="btn modal-button">open modal</label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="p-6 text-center">
                        <svg className="mx-auto mb-4 w-14 h-14 text-red-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                    </div>
                    <div className="modal-action w-full flex justify-evenly">
                        <label htmlFor="my-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Yes, I'm sure</label>

                        <label htmlFor="my-modal" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;