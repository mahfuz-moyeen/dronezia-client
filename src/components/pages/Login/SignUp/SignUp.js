import React, { useState } from 'react';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left mx-10">
                        <h1 className="text-4xl font-bold">Sign Up!</h1>
                        <p className="py-6">Create account to use this website properly. </p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form
                            onSubmit={handleFormSubmit}
                            className="card-body"
                        >

                            {/* name  */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="name"
                                    name="floating_name"
                                    onBlur={handleNameBlur}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    autoComplete='off'
                                    required />
                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                            </div>

                            {/* email  */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    onBlur={handleEmailBlur}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            {/* password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    name="floating_password"
                                    onBlur={handlePasswordBlur}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                    placeholder=" "
                                    required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>

                            {/*confirm password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    name="floating_confirmPassword"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    required />
                                <label htmlFor="floating_confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                            </div>

                            <div className="form-control mt-6">
                                <input type='submit' value='Sign Up' className="btn btn-primary" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <SocialSignIn />
        </div>
    );
};

export default SignUp;