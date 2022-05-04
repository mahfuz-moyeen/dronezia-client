import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventoryDetails = ({ item, items, setItems }) => {
    const { _id, name, supplier, quantity, price } = item;


    const handleDeleteInventory = id => {
        const proceed = window.confirm(`Are you sure to delete ${item.name}`)
        if (proceed) {
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
    }

    return (
        <tr className="bg-white border-b  hover:bg-indigo-50">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                {name}
            </th>
            <td className="px-6 py-4">
                {supplier}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4">
                $ {price}
            </td>
            <td className="px-6 py-4 flex justify-around">

                <Link to={`/inventory/${_id}`} className="btn btn-primary font-medium">
                    <PencilIcon className="h-5 w-5" /></Link>


                <button onClick={() => handleDeleteInventory(_id)} className="btn bg-rose-600 border-0 hover:bg-rose-700 font-medium">
                    <TrashIcon className="h-5 w-5" />
                </button>

            </td>
        </tr>
    );
};

export default ManageInventoryDetails;