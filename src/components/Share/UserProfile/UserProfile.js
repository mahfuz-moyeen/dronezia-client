import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto my-10'>
            <div className='card-body mx-auto'>
                <div className='flex justify-center scale-150 my-10'>
                    <div className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"

                    >
                        {
                            user?.photoURL ?
                                <img
                                    src={user.photoURL}
                                    className="w-full h-full rounded-full"
                                    alt='userPhoto'
                                    referrerPolicy="no-referrer"
                                />
                                :
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                                    <svg className="absolute w-12 12 text-indigo-600 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>
                        }
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl mb-5">{user?.displayName}</h1>
                    <h1 className="text-xl text-gray-500">{user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;