import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddInventory = () => {
    const [priceError, setPriceError] = useState('');
    const [quantityError, setQuantityError] = useState('');

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const img = event.target.url.value;
        const description = event.target.description.value;
        const email = user.email;

        if (price >= 0) {
            setPriceError('')
            if (quantity >= 0) {
                setQuantityError('')
                fetch('https://dronezia-server.herokuapp.com/inventory', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        img: img,
                        supplier: supplier,
                        price: price,
                        quantity: quantity,
                        description: description
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        event.target.reset();
                        toast.success('successfully Add your item')
                    })

            }
            else {
                setQuantityError('Enter positive Number')
            }
        }
        else {
            setPriceError('Enter positive Number')
        }

    }

    return (
        <div className='container mx-auto'>
            <div className='my-10 text-center font-semibold'>
                <h1 className='text-4xl my-2'>Add <span className='text-primary'>Item</span></h1>
            </div>
            <div className="lg:w-6/12 w-10/12 mx-auto bg-white mt-10 rounded-xl p-10 lg:shadow-lg shadow">
                <form onSubmit={handleAddItem}>

                    {/* name  */}
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="name"
                            name='name'
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                    </div>

                    {/* supplier  */}
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="supplier"
                            name='supplier'
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                        <label htmlFor="supplier" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Supplier</label>
                    </div>


                    {/* price  */}
                    <div className="relative mb-5">
                        <input
                            type="number"
                            id="price"
                            name='price'
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                        <label htmlFor="price" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Price</label>
                        {
                            priceError ? <p className='text-red-500'>{priceError}</p> : <></>
                        }
                    </div>


                    {/* quantity  */}
                    <div className="relative mb-5">
                        <input
                            type="number"
                            id="quantity"
                            name='quantity'
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                        <label htmlFor="quantity" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Quantity</label>
                        {
                            quantityError ? <p className='text-red-500'>{quantityError}</p> : <></>
                        }
                    </div>

                    {/* img url  */}
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="url"
                            name='url'
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                        <label htmlFor="url" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Img URL</label>
                    </div>

                    {/* description */}
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                    <textarea
                        id='description'
                        name='description'
                        className="textarea w-full h-36 textarea-bordered" required />

                    <input type='submit' className="btn btn-primary my-5 block mx-auto" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddInventory;