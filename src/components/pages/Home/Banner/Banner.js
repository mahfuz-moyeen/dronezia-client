import React from 'react';
import banner01 from '../../../../image/banner/banner-1.jpg'
import banner02 from '../../../../image/banner/banner-2.jpg'
import banner03 from '../../../../image/banner/banner-3.jpg'
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
    const data = [
        {
            image: banner01,
            caption: "Dji Mavic 3"
        },
        {
            image: banner02,
            caption: "Agras T30"
        },
        {
            image: banner03,
            caption: "Mavic 2 Series"
        }
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className=''>
            <Carousel
                data={data}
                time={3000}
                width="100%"
                height="450px"
                captionStyle={captionStyle}
                // slideNumber={false}
                // slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                // thumbnails={false}
                // thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    maxHeight: "450px",
                }}
            />

        </div>
    );
};

export default Banner;