import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Spinner from '../../../Share/Spinner/Spinner';
import emailVerify from '../../../../image/emailverify.jpg'

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const location = useLocation();

    if (loading || sending) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    const handleEmailVerify = async () => {
        await sendEmailVerification();
        alert('send email')
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5 w-10/12 mx-auto'>
            <div class="max-w-md mx-auto bg-white rounded-lg shadow-md">
                <img class="p-8 rounded-t-lg" src={emailVerify} alt="email verify" />

                <div class="px-5 pb-5 -my-10">
                    <h5 class="text-xl my-5 font-semibold tracking-tight text-indigo-700">Verify your email address</h5>
                    <div className='p-5 text-sm'>
                        <p>You've entered <span className='text-orange-500 font-semibold'>{user?.email}</span> as the email address to your account</p>
                        <p className='my-3'>Please verify this email address by clicking button below</p>
                    </div>
                    <button
                        className='btn btn-primary'
                        onClick={() => handleEmailVerify()}
                    >Verify your email</button>
                </div>
            </div>
        </div>
    }

    return children;
};

export default RequireAuth;