import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../Context/ProductContext';
import HeroCarousel from '../SiteBanner';

const HomePage = () => {
    const products = useProducts();
    const productsHomePage = products.filter((product) => product.category === "HomePage");

    return (
        <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-7 border-t border-gray-400'>
            <HeroCarousel />
            <div className='mt-40 grid grid-cols gap-x-6 gap-y-10 gap-y-0 sm:gap-y-10 sm:grid-cols-2 md:grid-cols-3 max-w-1xl lg:grid-cols-3 xl:gap-x-8'>
                {productsHomePage.map((product) => (
                    <div className='relative mt-0 sm:mt-0 bottom-20 bg-purple-900' key={product.id}>
                        <div className='rounded shadow-inner aspect-h-1 aspect-w-1 w-full h-6/6 select-none overflow-hidden'>
                            <Link to="/WinterProducts" className='object-cover object-center cursor-pointer'>
                                <img src={product.image1} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title1}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit1}</span>
                            </Link>

                            <Link to="/SummerProducts" className='object-cover object-center cursor-pointer'>
                                <img src={product.image2} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title2}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit2}</span>
                            </Link>

                            <Link to="/SuitProducts" className='object-cover object-center cursor-pointer'>
                                <img src={product.image3} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title3}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit3}</span>
                            </Link>

                            <Link to="/EveningDress" className='object-cover object-center cursor-pointer'>
                                <img src={product.image4} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title4}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit4}</span>
                            </Link>

                            <Link to="/BrideDress" className='object-cover object-center cursor-pointer'>
                                <img src={product.image5} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title5}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit5}</span>
                            </Link>

                            <Link to="/SportsProducts" className='object-cover object-center cursor-pointer'>
                                <img src={product.image6} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title6}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.tit6}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
