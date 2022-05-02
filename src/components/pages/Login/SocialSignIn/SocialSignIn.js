import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Spinner from '../../../Share/Spinner/Spinner';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }
    if (user) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }

    return (
        <div className='my-5 mx-auto'>
            <div className='flex items-center py-5'>
                <div style={{ height: '2px' }} className='bg-blue-500 w-6/12'></div>
                <p className='px-2 text-2xl font-semibold -mt-2'>or</p>
                <div style={{ height: '2px' }} className='bg-blue-500 w-6/12'></div>
            </div>

            <div>
                {
                    error ? <p className='text-center text-sm text-red-500 p-5'>{error?.message.slice(22)}</p> : <></>
                }
            </div>

            <button
                onClick={() => signInWithGoogle()}
                className="btn bg-orange-500 hover:bg-orange-600 border-0">
                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialSignIn; <h1>social sign in</h1>