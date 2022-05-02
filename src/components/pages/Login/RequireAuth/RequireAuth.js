import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Spinner from '../../../Share/Spinner/Spinner';
import emailVerify from '../../../../image/emailverify.jpg'

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5 w-10/12 mx-auto'>
            <img className='block mx-auto' width={400} height={400} src={emailVerify} alt="emailVerify" />
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            
        </div>
    }

    return children;
};

export default RequireAuth;