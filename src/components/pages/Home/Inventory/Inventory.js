import React from 'react';

const Inventory = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold my-10 text-center'>Inventory <span className='text-primary'>Items</span></h1>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {/* card  */}
                    <div className="card card-compact w-10/12 mx-auto bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start items-center">
                                <h2 className="card-title">Shoes!</h2>
                                <div className="badge badge-outline">Brand</div>
                            </div>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-between">
                                <span class="text-3xl font-bold text-gray-900">$599</span>
                                <button className="btn btn-primary">stock update</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Inventory;