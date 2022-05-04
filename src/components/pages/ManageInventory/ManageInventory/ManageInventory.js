import React from 'react';
import useInventory from '../../../../Hook/useInventory';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [items, setItems] = useInventory();


    return (
        <div>
            <div className='my-10 text-center font-semibold'>
                <h1 className='text-4xl my-2'>Manage <span className='text-primary'>Inventory</span></h1>
                <h1 className='text-2xl my-2'>Total items: {items.length}</h1>
            </div>

            <div className='w-11/12 mx-auto mt-10'>

                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-indigo-500">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Brand
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    In Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Edit and Delete
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
        </div >
    );
};

export default ManageInventory;