import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../../../Hook/useInventoryDetails';

const InventoryItem = () => {
    const { inventoryId } = useParams();
    const [item] = useInventoryDetails(inventoryId);

    const { name, img, price, quantity, supplier, description } = item;

    return (
        <div>
            <div className='w-11/12 mx-auto mt-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">

                    <figure><img className='hover:scale-110 transform duration-100 ease-linear' src={img} alt={name} /></figure>
                    <div className="card-body lg:w-7/12">
                        <div className='lg:my-auto'>
                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{name}</h2>
                            <p className=" lg:text-xl my-2">Brand: {supplier}</p>
                            <p className=" lg:text-xl my-2">Price: ${price}</p>
                            <p className="lg:text-lg my-2">Description: {description}</p>
                            <div className="badge lg:text-xl p-4 lg:mb-0 mb-10">In Stock: {quantity}</div>
                        </div>

                        <div className="card-actions flex-col lg:flex-row justify-between">

                            <form className="form-control">
                                <label className="input-group">
                                    <input type='submit' value='RESTOCK' className="btn btn-primary" />
                                    <input type="number" placeholder="Restock Quantity" className="input input-bordered" required />
                                </label>
                            </form>

                            <button className="btn border-0 bg-rose-600 hover:bg-rose-700">Delivered
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default InventoryItem;