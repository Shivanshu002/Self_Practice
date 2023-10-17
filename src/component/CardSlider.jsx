import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function CardSlider() {

    const slides = [
        {
            url: 'https://www.careerguide.com/images_new/banner_4.png',
        },
        {
            url: 'https://www.careerguide.com/images_new/banner_5.png'
        },
        {
            url: 'https://www.careerguide.com/images_new/banner_1.png'
        },
        {
            url: 'https://www.careerguide.com/images_new/banner_2.png'
        },
        {
            url: 'https://www.careerguide.com/images_new/banner_3.png'
        },
    ];

    const [currIndex, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
        setIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[500px] w-full m-auto py-5 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currIndex].url})` }} className='w-full h-full  bg-center bg-cover duration-500 p-10 '>
                {/* navbar */}
                <div className='  text-white  duration-500 opacity-30 hover:opacity-60 bg-gray-900 rounded-lg p-4 justify-between cursor-pointer'>
                    <div className=' text-xl  flex justify-between font-thin'>
                        <h1 className=''>All collections</h1>
                        <h1>Deals</h1>
                        <h1>Sign In</h1>
                        <h1>English</h1>

                    </div>
                </div>
                <div>
                    <h1 className='uppercase my-[90px] text-5xl text-slate-200'>Because You’re Worth It</h1>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CardSlider;