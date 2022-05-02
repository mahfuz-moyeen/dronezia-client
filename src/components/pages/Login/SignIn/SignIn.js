import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        signInWithEmailAndPassword(email, password)
        console.log('login');
        console.log(user);
    }

    const handleSignIn = event => {
        event.preventDefault();
        console.log(email, password);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form
                            onSubmit={handleSignIn}
                            className="card-body"
                        >

                            {/* email  */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    onBlur={handleEmailBlur}
                                    className="block bg-transparent z-0 py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    // autoComplete='off'
                                    required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            {/* password */}

                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    name="floating_password"
                                    onBlur={handlePasswordBlur}
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-500'
                                    placeholder=" "
                                    required />
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>


                            {/* <div>
                                {
                                    error ? <p className='text-center text-sm text-red-500'>{error?.message.slice(22)}</p> : <></>
                                }
                            </div> */}
                            <div className="form-control mt-6">
                                <input type='submit' value='Sign In' className="btn btn-primary" />
                            </div>
                        </form>

                    </div>

                    <div className="text-center lg:text-left mx-auto">
                        <h1 className="text-4xl font-bold">Sign In</h1>
                        <p className="py-6">Your account to use this website properly and more feature. </p>
                    </div>


                </div>
            </div>

            <SocialSignIn />
        </div>
    );
};

export default SignIn;