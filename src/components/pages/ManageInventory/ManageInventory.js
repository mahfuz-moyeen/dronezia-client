import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-semibold my-10 text-center'>Manage <span className='text-primary'>Invantory</span></h1>

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
                        {items.map(item => < tbody >
                                <tr className="bg-white border-b  hover:bg-indigo-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                        {item?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                    {item?.supplier}
                                    </td>
                                    <td className="px-6 py-4">
                                    {item?.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        $ {item?.price}
                                    </td>
                                    <td className="px-6 py-4 flex justify-around">

                                        <Link to={`/inventory/${item?.id}`} className="btn btn-primary font-medium">
                                            <PencilIcon className="h-5 w-5" /></Link>


                                        <Link to={`/inventory/${item?.id}`} className="btn bg-rose-600 border-0 hover:bg-rose-700 font-medium">
                                            <TrashIcon className="h-5 w-5" /></Link>

                                    </td>
                                </tr>

                            </tbody>
                        )
                        }
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ManageInventory;