import { ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../../Hook/useInventory';
import ItemCard from '../ItemCard/ItemCard';

const Inventory = () => {
    const [items] = useInventory();
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
        <div className='container mx-auto relative pb-10'>
            <h1 className='text-4xl font-semibold my-10 text-center'>Inventory <span className='text-primary'>Items</span></h1>
            <div className='flex justify-center gap-10 my-10'>
                <Link
                    to='/manage-inventory'
                    className='btn btn-info'
                >Manage Items</Link>
                <Link
                    to='/add-inventory'
                    className='btn btn-info'
                >Add Item</Link>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>

                    {
                        items.map(item => <ItemCard
                            key={item._id}
                            item={item}
                        />
                        )
                    }

                </div>
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

export default Inventory;