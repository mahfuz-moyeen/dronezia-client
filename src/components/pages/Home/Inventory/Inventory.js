import React from 'react';
import useInventory from '../../../../Hook/useInventory';
import ItemCard from '../ItemCard/ItemCard';

const Inventory = () => {
    const [items] = useInventory();

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold my-10 text-center'>Inventory <span className='text-primary'>Items</span></h1>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        items.map(item => <ItemCard
                            key={item.id}
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