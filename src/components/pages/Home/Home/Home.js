import { PresentationChartBarIcon } from '@heroicons/react/outline';
import { GlobeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import ItemCard from '../ItemCard/ItemCard';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://dronezia-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Banner />

            {/* Inventory  */}
            <div className='container mx-auto'>
                <h1 className='text-4xl font-semibold my-10 text-center'>Inventory <span className='text-primary'>Items</span></h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        items.map(item => <ItemCard
                            key={item._id}
                            item={item}
                        />
                        )
                    }

                </div>

                <div className='my-5 flex justify-center gap-10'>
                    <Link
                        to='/inventory'
                        className='btn btn-primary'
                    >See All Items</Link>

                    <Link
                        to='/manage-inventory'
                        className='btn btn-info'
                    >Manage Inventories</Link>
                </div>
            </div>


            {/* counter  */}
            <div className='my-10 counter-bg'>
                <h1 className='my-5 text-3xl text-center'>We are now,</h1>
                <div className='flex justify-center'>
                    <div className="stats w-8/12 text-center mb-5 stats-vertical lg:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-value text-indigo-600 flex justify-center gap-1"><ViewGridIcon className='w-10 h-10' /> 15</div>
                            <div className="stat-title">Offices Worldwide</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value text-indigo-600 flex justify-center gap-1"><UserGroupIcon className='w-10 h-10' />97</div>
                            <div className="stat-title">
                                Hardworking People</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value text-indigo-600 flex justify-center gap-1">
                                <GlobeIcon className='w-10 h-10'></GlobeIcon>12</div>
                            <div className="stat-title">Countries Covered </div>
                        </div>

                        <div className="stat">
                            <div className="stat-value text-indigo-600 flex justify-center gap-1">
                                <PresentationChartBarIcon className='w-10 h-10' /> 30</div>
                            <div className="stat-title">Years of Experiences </div>
                        </div>

                    </div>
                </div>
            </div>

            <Services />
            
            <Form />

            {/* <Testimonials/> */}

        </div>
    );
};

export default Home;