import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProducts } from '../Context/ProductContext';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import BrandSlider from './BrandSlider';
import { SearchBar } from './SearchBar';

const HeroCarousel = () => {
  const products = useProducts();
  // slides one
  const slides = products.filter((product) => product.category === "Slide");

  // BrandSlide two
  const brandSlide = products.filter((product) => product.category === "BrandSlide");

  const sliderRef = useRef(null); // Reference to the Slider component

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=''>
      <div className='relative bg-purple-800 shadow-lg rounded-md p-5 '>
        <Slider className='mb-5 ' ref={sliderRef} {...settingsSlider}>
          {slides.map((slider) => (
            <div key={slider.id} className='h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] sm:mb-10  md:mb-20'>
              <div>
                <img src={slider.image} alt={slider.title} className='w-full h-full object-cover rounded ' />
              </div>
            </div>
          ))}
        </Slider>
        {/* Slider Navigation */}
        <button
          className=' hidden sm:block absolute top-1/2 left-7 transform -translate-y-1/2 bg-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center'
          style={{ zIndex: 50 }}
          onClick={() => sliderRef.current.slickPrev()} 
        >
          <FaAngleLeft className='ml-2 text-2xl'/>
        </button>
        <button
          className=' hidden sm:block absolute top-1/2 right-7 transform -translate-y-1/2 bg-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center'
          style={{ zIndex: 50 }}
          onClick={() => sliderRef.current.slickNext()} 
        >
          <FaAngleRight className='ml-2 text-2xl'/>
        </button>
      </div>

      <BrandSlider/>
    </div>

  );

};

export default HeroCarousel;

