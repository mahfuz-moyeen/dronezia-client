import React from 'react';
import dropBox from '../../../../image/services/dropbox-brands.svg'
import truck from '../../../../image/services/truck-solid.svg'
import earth from '../../../../image/services/earth-americas-solid.svg'
import archive from '../../../../image/services/box-archive-solid.svg'
import home from '../../../../image/services/house-solid.svg'
import road from '../../../../image/services/road-solid.svg'

const Services = () => {

    const services = [
        {
            id:1,
            name: "PACKAGING AND STORAGE",
            text: "We can package and store your things.",
            icon: dropBox
        },
        {
            id:2,
            name: "CARGO",
            text: "Let us transport your things from point A to point B fast and securely.",
            icon: truck
        },
        {
            id:3,
            name: "WORLDWIDE TRANSPORT",
            text: "We can transport your things anywhere in the world.",
            icon: earth
        },
        {
            id:4,
            name: "WAREHOUSING",
            text: "We have top notch security and loads of space. Store your stuff at our warehouse.",
            icon: archive
        },
        {
            id:5,
            name: "DOOR-TO-DOOR DELIVERY",
            text: "Do you need something delivered? We are what you are looking for!",
            icon: home
        },
        {
            id:6,
            name: "GROUND TRANSPORT",
            text: "Transport your things with our super moving vans.",
            icon: road
        }
    ];

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-4xl font-semibold my-10 text-center'>Our <span className='text-primary'>Services</span></h1>

            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5'>

                {
                    services.map(service => <div 
                    key={service.id} 
                    className="card w-96 rounded-none bg-white hover:shadow-xl border-b-2 border-white hover:border-b-2 hover:border-indigo-600">
                        <div className='card-body'>
                            <div className='flex justify-between items-center gap-4'>
                                <div>
                                    <h2 className="card-title text-lg mb-2">{service.name}</h2>
                                    <p className='text-sm'>{service.text}</p>
                                </div>
                                <img width={50} height={50} src={service.icon} alt="dropBox" />
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Services;