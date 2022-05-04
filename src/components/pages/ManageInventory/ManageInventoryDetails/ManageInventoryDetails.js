import { ExclamationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventoryDetails = ({ item, items, setItems }) => {
    const { _id, name, supplier, quantity, price } = item;


    const handleDeleteInventory = id => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const rest = items.filter(item => item._id !== id)
                setItems(rest)
            })
    }

    return (
        <tr className="bg-white border-b  hover:bg-indigo-50">

            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                {name}
            </th>
            <td className="lg:px-6 lg:py-4 hidden lg:table-cell">
                {supplier}
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
                {quantity}
            </td>
            <td className="px-6 py-4 hidden lg:table-cell">
                $ {price}
            </td>
            <td className="px-6 py-4 flex justify-around">

                {/* edit or update item  */}
                <div class="tooltip" data-tip="Edit Item">
                    <Link to={`/inventory/${_id}`} className="btn btn-primary font-medium">
                        <PencilIcon className="h-5 w-5" /></Link>
                </div>
                {/* delete button  */}
                <div class="tooltip" data-tip="Delete Item">
                    <button >
                        <label htmlFor={_id} className="btn bg-rose-600 border-0 hover:bg-rose-700 font-medium" >
                            <TrashIcon className="h-5 w-5" />
                        </label>
                    </button>
                </div>


                {/* modal  */}
                <input type="checkbox" id={_id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div className="p-6 text-center">
                            <ExclamationCircleIcon className='w-1/6 h-1/6 block mx-auto mb-5 text-red-500' />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                        </div>
                        <div className="modal-action w-full flex justify-evenly">
                            <button onClick={() => handleDeleteInventory(_id)}>
                                <label htmlFor={_id} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"> Yes, I'm sure</label>
                            </button>

                            <label htmlFor={_id} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</label>
                        </div>

                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ManageInventoryDetails;