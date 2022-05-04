import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ItemCard from '../ItemCard/ItemCard';
// import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Banner />

            {/* <Inventory /> */}

            <div className='container mx-auto'>
                <h1 className='text-4xl font-semibold my-10 text-center'>Inventory <span className='text-primary'>Items</span></h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        items.map(item => <ItemCard
                            key={item.id}
                            item={item}
                        />
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;