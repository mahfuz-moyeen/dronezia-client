import { ChevronUpIcon, PlusIcon, UserIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../../Hook/useInventory';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [items, setItems] = useInventory();
    const [scroll, setScroll] = useState(false)

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
        <div id='manage' className='container mx-auto relative'>
            <div className='my-10 text-center font-semibold'>
                <h1 className='text-4xl my-2'>Manage <span className='text-primary'>Inventory</span></h1>
                <h1 className='text-2xl my-2'>Total items: {items.length}</h1>
            </div>

            <div className='w-11/12 mx-auto my-10'>
                <div className='flex justify-between my-5'>
                    <Link
                        to='/myItem'
                        className='btn btn-outline btn-primary'
                    >My Item <UserIcon className='w-5 h-5 mx-2'/></Link>
                    <Link
                        to='/add-inventory'
                        className='btn btn-outline btn-primary'
                    >Add New Item <PlusIcon className='w-5 h-5 mx-2'/></Link>
                </div>

                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-indigo-500">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                                    Supplier
                                </th>
                                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                                    In Stock
                                </th>
                                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    <span className='hidden'> Edit and Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => <ManageInventoryDetails
                                key={item._id}
                                item={item}
                                items={items}
                                setItems={setItems}
                            />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${scroll ? 'block' : 'hidden'} w-10/12 lg:w-full mx-auto flex justify-end sticky bottom-3`}>
                <button
                    onClick={() => topFunction()}
                    className='p-1 rounded-lg bg-indigo-600 hover:bg-indigo-700'>
                    <ChevronUpIcon className='text-white w-5 h-5 lg:w-8 lg:h-8' />
                </button>
            </div>
        </div >
    );
};

export default ManageInventory;