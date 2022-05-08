import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useInventory from '../../../Hook/useInventory';
import { signOut } from 'firebase/auth';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Spinner from '../../Share/Spinner/Spinner';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [items, setItems] = useInventory();
    const [scroll, setScroll] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        const getMyItem = async () => {
            const url = `https://dronezia-server.herokuapp.com/myItem?email=${user.email}`;
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (!data.message) {
                            console.log(1);
                            setMyItems(data)
                        }
                        else {
                            setError(true);
                           
                        }
                    })

                if(!error){
                    console.log('2');
                    signOut(auth);
                    navigate('/sign-in');
                }
            }
            catch (error) {
            }
        }

        getMyItem();

    }, [items])

    if (loading) {
        return <Spinner />
    }

    const handleDeleteMyItem = id => {
        const url = `https://dronezia-server.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const rest = items.filter(item => item._id !== id)
                setItems(rest)
                toast.error('Delete Items')
            })
    }

    //scroll to  top
    window.onscroll = function () { scrollFunction() };
    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='container mx-auto'>
            <div className='my-10 text-center font-semibold'>
                <h1 className='text-4xl my-2'>My <span className='text-primary'>Items</span></h1>
                <h1 className='text-2xl my-2'>Total items: {myItems.length}</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    myItems.map(item => < div
                        key={item._id}
                        className="card card-compact w-10/12 mx-auto bg-base-100 shadow-xl hover:shadow-2xl" >
                        <figure><img className='hover:scale-110 transform duration-100 ease-linear' src={item?.img} alt={item?.name} /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-between items-center">
                                <div className="card-actions justify-start items-center">
                                    <h2 className="card-title">{item?.name}</h2>
                                    <div className="badge badge-outline">{item?.supplier}</div>
                                </div>
                                <div className="card-actions justify-end">
                                    {
                                        item?.quantity > 0 ?
                                            <div className="badge">In Stock: {item?.quantity}</div>
                                            :
                                            <div className="badge badge-error">Stock out: {item?.quantity}</div>
                                    }
                                </div>
                            </div>
                            <p>{item?.description}</p>
                            <div className="card-actions justify-between">
                                <span className="text-3xl font-bold text-gray-900">${item?.price}</span>

                                <button className="btn btn-primary" onClick={() => navigate(`/inventory/${item?._id}`)}>stock update</button>

                                <button >
                                    <label htmlFor={item._id} className="btn bg-rose-600 border-0 hover:bg-rose-700 font-medium" >
                                        <TrashIcon className="h-5 w-5" />
                                    </label>
                                </button>
                            </div>
                        </div>

                        {/* modal  */}
                        <input type="checkbox" id={item._id} className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <div className="p-6 text-center">
                                    <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                                </div>
                                <div className="modal-action w-full flex justify-evenly">
                                    <button onClick={() => handleDeleteMyItem(item._id)}>
                                        <label htmlFor={item._id} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Yes, I'm sure</label>
                                    </button>

                                    <label htmlFor={item._id} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</label>
                                </div>

                            </div>
                        </div>
                    </div >
                    )
                }

            </div>

            <div className={`${scroll ? 'block' : 'hidden'} w-10/12 lg:w-full mx-auto flex justify-end sticky bottom-3`}>
                <button
                    onClick={() => topFunction()}
                    className='p-1 rounded-lg bg-indigo-600 hover:bg-indigo-700'>
                    <ChevronUpIcon className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                </button>
            </div>

        </div>
    );
};

export default MyItem;