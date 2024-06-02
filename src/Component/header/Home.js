import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../Context/ProductContext';
import Bnslides from '../SiteBanner';

const HomePage = () => {
    const products = useProducts();

    const productsHomePage = products.filter((product) => product.categories === "HomePage");
    console.log(productsHomePage);
    return (
        <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-7 border-t border-gray-400'>
            <Bnslides />
            <div className='mt-40 grid grid-cols gap-x-6 gap-y-10 gap-y-0 sm:gap-y-10 sm:grid-cols-2 md:grid-cols-3 max-w-1xl lg:grid-cols-3 xl:gap-x-8'>
                {productsHomePage.map((product) => (
                    <div className='relative mt-0 sm:mt-0 bottom-20 bg-purple-900' key={product.id}>
                        <div className='rounded shadow-inner aspect-h-1 aspect-w-1 w-full h-6/6 select-none overflow-hidden'>
                            <Link to={`${product.title}`} className='object-cover object-center cursor-pointer'>
                                <img src={product.images.url} alt='' />
                                <span className='relative left-5 text-stone-50 font-semibold text-lg'>{product.title}</span>
                                <span className='relative block bottom-1 left-5 text-stone-50 font-semibold text-base underline'>{product.description.text}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
