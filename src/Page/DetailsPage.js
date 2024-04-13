import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetailsPage } from '../Context/ProductContext';
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
    const { id } = useParams();
    const productDetails = useProductDetailsPage(+id);

    if (!productDetails) {
       return <span>Loading...</span>
    }

    const navigateBack = () => {
        window.history.back()
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="max-w-xl w-full bg-white shadow-md rounded-lg mb-36 mt-8 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Product Image */}
                    <img src={productDetails.image} alt={productDetails.title} className="object-cover w-full h-auto" />
                    <div className="p-6">
                        {/* Product Title */}
                        <h2 className="text-3xl font-bold mb-4">{productDetails.title}</h2>
                        {/* Product Description */}
                        <p className="w-[200px] break-words text-gray-800 mb-20">{productDetails.description}</p>
                        {/* Product Category */}
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="font-semibold"> <SiOpenproject/> {productDetails.category}</span>
                        </p>
                        <div className='flex mt-20 justify-between '>
                            {/* Product Price */}
                            <p className="flex items-center text-gray-600 ">
                                <IoMdPricetag/> <span className="font-semibold">{productDetails.price} $</span>
                            </p>
                            {/* Back to Shop Button */}
                            <button onClick={navigateBack} className="flex items-center gap-2 bg-blue-500 text-white font-semibold p-[8px] rounded hover:bg-blue-600 transition duration-300">
                                <FaArrowLeft/>Back to Shop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
