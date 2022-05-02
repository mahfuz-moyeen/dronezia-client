import React from 'react';
import 'tw-elements';
import banner01 from '../../../../image/banner/banner-1.jpg'
import banner02 from '../../../../image/banner/banner-2.jpg'
import banner03 from '../../../../image/banner/banner-3.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >

                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>


                <div className="carousel-inner relative w-full overflow-hidden">

                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={banner01}
                            className="block w-full"
                            alt="drone 1"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-white">Dji Mavic 3</h5>
                            <p className='text-white'>Every improvement on Mavic 3 sets a higher standard for aerial photography.</p>
                        </div>
                    </div>


                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={banner02}
                            className="block w-full"
                            alt="drone 2"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-white">Agras T30</h5>
                            <p className='text-white'>A revolutionary transforming body enables more effective spraying, especially for fruit trees.</p>
                        </div>
                    </div>


                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={banner03}
                            className="block w-full"
                            alt="drone 3"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl text-white">Mavic 2 Series</h5>
                            <p className='text-white'>A balance of power and portability delivers higher operational efficiency</p>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;