import React from 'react';

const InventoryItem = ({ item }) => {
    const { name, img, price, quantity, supplier, description } = item
    return (
        < div className="card card-compact w-10/12 mx-auto bg-base-100 shadow-xl hover:shadow-2xl" >
            <figure><img className='hover:scale-110 transform duration-100 ease-linear' src={img} alt={name} /></figure>
            <div className="card-body">
                <div className="card-actions justify-between items-center">
                    <div className="card-actions justify-start items-center">
                        <h2 className="card-title">{name}</h2>
                        <div className="badge badge-outline">{supplier}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge">In Stock: {quantity}</div>
                    </div>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <span class="text-3xl font-bold text-gray-900">${price}</span>
                    <button className="btn btn-primary">stock update</button>
                </div>
            </div>
        </div >
    );
};

export default InventoryItem;