import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProducts } from '../Context/ProductContext';


const BrandSlider = () => {
    const products = useProducts();

    const brandSlider = products.filter((product) => product.categories === "BrandSlide");

    const sliderRef = useRef(null);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        arrows: false,
        autoplaySpeed: 1000,
        autoplay: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='bg-purple-900 mt-8 md:mt-24 shadow-lg rounded-md p-5'>
            <Slider ref={sliderRef} {...settings}>
            {
                brandSlider.map((slider) => (
                    <div key={slider.id} className='' >
                        <div>
                            <img src={slider.images.url} alt='slider' className='rounded h-[130px]'/>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </div>
    );
};

export default BrandSlider;
