import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ItemCard from '../Home/ItemCard/ItemCard';


const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/myItem?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <div className='my-10 text-center font-semibold'>
                <h1 className='text-4xl my-2'>My <span className='text-primary'>Items</span></h1>
                <h1 className='text-2xl my-2'>Total items: {myItems.length}</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    myItems.map(item => <ItemCard
                        key={item._id}
                        item={item}
                    />
                    )
                }

            </div>
        </div>
    );
};

export default MyItem;