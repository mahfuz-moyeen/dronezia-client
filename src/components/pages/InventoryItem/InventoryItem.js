import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useInventoryDetails from '../../../Hook/useInventoryDetails';

const InventoryItem = () => {
    const { inventoryId } = useParams();
    const [update, setUpdate] = useState([]);
    const [item] = useInventoryDetails(inventoryId, update);



    const { name, img, price, quantity, supplier, description } = item;

    const handleRestockSubmit = event => {
        event.preventDefault();
        const number = event.target.number.value;
        // update to server 
        const restockQuantity = parseInt(number) + parseInt(quantity);
        const updateInventory = { quantity: restockQuantity }

        fetch(`http://localhost:5000/inventory/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInventory)
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                toast.success('restock successfully');
            })
    }
    const handleDeliveredSubmit = () => {
        if (parseInt(quantity) > 0) {
            const DeliveredQuantity = parseInt(quantity) - 1;
            const updateInventory = { quantity: DeliveredQuantity }
            // update to server 
            fetch(`http://localhost:5000/inventory/${inventoryId}`, {
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

    return (
        <div>
            <div className='w-11/12 mx-auto mt-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">

                    <figure><img className='hover:scale-110 transform duration-100 ease-linear' src={img} alt={name} /></figure>
                    <div className="card-body lg:w-7/12">
                        <div className='lg:my-auto'>
                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{name}</h2>
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


        </div>
    );
};

export default InventoryItem;