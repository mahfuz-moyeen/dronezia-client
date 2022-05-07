import { PencilIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../../Hook/useInventoryDetails';

const InventoryItem = () => {
    const { inventoryId } = useParams();
    const [update, setUpdate] = useState([]);
    const [item] = useInventoryDetails(inventoryId, update);



    const { _id, name, img, price, quantity, supplier, description } = item;

    const handleRestockSubmit = event => {
        event.preventDefault();
        const number = event.target.number.value;
        // update to server 
        const restockQuantity = parseInt(number) + parseInt(quantity);
        const updateInventory = { quantity: restockQuantity }

        fetch(`https://dronezia-server.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInventory)
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                event.target.reset();
                toast.success('restock successfully');
            })
    }

    const handleDeliveredSubmit = () => {
        if (parseInt(quantity) > 0) {
            const DeliveredQuantity = parseInt(quantity) - 1;
            const updateInventory = { quantity: DeliveredQuantity }
            // update to server 
            fetch(`https://dronezia-server.herokuapp.com/inventory/${inventoryId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateInventory)
            })
                .then(res => res.json())
                .then(data => {
                    setUpdate(data)
                    toast.success('Delivered successfully');
                })
        }

        else {
            toast.error('Sorry out of stock !!');
        }
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        const updateName = event.target.name.value;
        const updateSupplier = event.target.supplier.value;
        const updatePrice = event.target.price.value;
        const updateDescription = event.target.description.value;
        const updateQuantity = quantity;

        const updateDate = {
            name: updateName,
            supplier: updateSupplier,
            price: updatePrice,
            description: updateDescription,
            quantity: updateQuantity
        }
        // update to server 
        fetch(`https://dronezia-server.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDate)
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                toast.success('Update successfully');
            })
    }


    return (
        <div>
            <div className='w-11/12 mx-auto mt-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">

                    <figure><img className='hover:scale-110 transform duration-100 ease-linear' src={img} alt={name} /></figure>

                    <div className="card-body lg:w-7/12">

                        <div className='lg:my-auto'>
                            <div className='flex justify-between items-center'>
                                <h2 className="text-xl font-semibold my-5 lg:text-4xl">{name}</h2>
                                {/* text edit button  */}
                                <div className="tooltip" data-tip="Text Edit">
                                    <button className='text-indigo-700 hover:text-rose-500'>
                                        <label htmlFor={_id} >
                                            <PencilIcon className="h-6 w-6 cursor-pointer " />
                                        </label>
                                    </button>
                                </div>
                            </div>
                            <p className=" lg:text-xl my-2"><span className=' font-semibold'>Supplier:</span> {supplier}</p>
                            <p className=" lg:text-xl my-2"><span className=' font-semibold'>Price:</span> ${price}</p>
                            <p className="lg:text-lg my-2"><span className=' font-semibold'>Description:</span> {description}</p>
                            {
                                quantity > 0 ?
                                    <div className="badge lg:text-xl p-4 lg:mb-0 mb-10">In Stock: {quantity}</div> :
                                    <div className="badge badge-error lg:text-xl p-4 lg:mb-0 mb-10">Stock Out: {quantity}</div>
                            }
                        </div>

                        <div className="card-actions flex-col lg:flex-row justify-between">

                            <form className="form-control" onSubmit={handleRestockSubmit}>
                                <label className="input-group">
                                    <input type='submit' value='RESTOCK' className="btn btn-primary" />
                                    <input type="number" name='number' placeholder="Restock Quantity" className="input input-bordered" required />
                                </label>
                            </form>

                            <button
                                onClick={() => handleDeliveredSubmit()}
                                className="btn border-0 bg-rose-600 hover:bg-rose-700">Delivered
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-10'>
            <Link
                to='/manage-inventory'
                className='btn btn-info'
            >Manage Inventories</Link>
            </div>

            {/* modal  */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="p-6 text-center">

                        <div className="card-body">
                            <form onSubmit={handleUpdateSubmit}>

                                {/* name  */}
                                <div className="relative mb-5">
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' defaultValue={name} required />
                                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                                </div>

                                {/* supplier  */}
                                <div className="relative mb-5">
                                    <input
                                        type="text"
                                        id="supplier"
                                        name='supplier'
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' defaultValue={supplier} required />
                                    <label htmlFor="supplier" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Supplier</label>
                                </div>

                                {/* price  */}
                                <div className="relative mb-5">
                                    <input
                                        type="number"
                                        id="price"
                                        name='price'
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' defaultValue={price} required />
                                    <label htmlFor="price" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Price</label>
                                </div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <textarea
                                    id='description'
                                    name='description'
                                    className="textarea w-full h-36 textarea-bordered" defaultValue={description} required />


                                <div className="modal-action w-full flex justify-evenly">

                                    <button type='submit' className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                        Update
                                    </button>

                                    <label htmlFor={_id} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">cancel</label>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div >


        </div >
    );
};

export default InventoryItem;