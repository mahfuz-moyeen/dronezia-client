import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../../Hook/useInventory';
import ItemCard from '../ItemCard/ItemCard';

const Inventory = () => {
    const [items] = useInventory();

    return (
        <div className='container mx-auto'>
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
        </div>
    );
};

export default Inventory;