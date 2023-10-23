import React, { useState, useEffect } from 'react';

// Import your images
import image1 from '../assets/ConPic.png';
import image2 from '../assets/LandingPic.jpg';
import image3 from '../assets/servicesImage1.png';
import image4 from '../assets/wedo.png';
import image5 from '../assets/loginPagePic.png';

const images = [image1, image2, image3, image4, image5]; // Add your imported images here

const InfiniteLoopCarosol = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextItem, 3000); // Auto slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex w-[600px] h-[400px] gap-10">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : 'bg-blue-400'}`}
                >
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2"
                onClick={prevItem}
            >
                Previous
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={nextItem}
            >
                Next
            </button>
        </div>
    );
};

export default InfiniteLoopCarosol;
