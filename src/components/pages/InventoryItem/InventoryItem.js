import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams();
    return (
        <div>
            <h1 className='text-2xl text-center my-10'>{id}</h1>


            <div className='w-11/12 mx-auto'>
                <div className="card lg:card-side bg-base-100 shadow-xl">

                    <figure><img className='hover:scale-110 transform duration-100 ease-linear' src="https://i.ibb.co/0fvDK2R/mavic-air-2.png" alt="Album" /></figure>
                    <div className="card-body lg:w-7/12">
                        <div className='lg:my-auto'>
                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{`Mavic 2`}</h2>
                            <p className=" lg:text-xl my-2">Brand: {`DJI`}</p>
                            <p className=" lg:text-xl my-2">Price: ${`799`}</p>
                            <p className="lg:text-lg my-2">Description: {`Small but mighty, DJI Mini 2 features 4K videos, 4x Zoom, and stunning panoramas, allowing you to explore a whole new perspective.`}</p>
                            <div className="badge lg:text-xl p-4 lg:mb-0 mb-10">In Stock: {`10`}</div>
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