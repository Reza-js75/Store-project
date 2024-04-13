import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { productQuantity } from '../helper/helper';
import { useProducts }  from '../Context/ProductContext';

// icons
import { RiListCheck2 } from 'react-icons/ri';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";


const BrideDress = () => {
  const products = useProducts();
  const summerClothes = products.filter((product) => product.category === "BrideDress");
  const [state, dispatch] = useCart();

  const addToCart = (type, product) => {
    dispatch({ type, payload: product });
  };

  return (
    <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 border-t border-gray-200 lg:px-2'>
      <div className='relative font-bold text-slate-200  bottom-10 '>
        <Link to={"/"} className='flex gap-1 hover:text-blue-400'><FaArrowLeft className='mt-1'/>Back</Link>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
        {summerClothes.map((product) => {
          const quantity = productQuantity(state, product.id);

          return (
            <div key={product.id} className="border border-purple-900 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <img src={product.image} alt='products' className="mb-2 rounded" />
                <h2 className="text-blue-400 font-semibold">{product.title}</h2>
                <p className="text-blue-100 font-semibold">${product.price}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link className='text-xl text-slate-300' to={`/DetailsPage/${product.id}`}>
                  <RiListCheck2 />
                </Link>
                <div>
                  {quantity === 1 && (
                    <button className='text-rose-600 border-red-700  rounded-md' onClick={() => addToCart("REMOVE_ITEM", product)}>
                      <MdDeleteOutline />
                    </button>
                  )}
                  {quantity > 1 && (
                    <button className='text-slate-300 border-red-700  font-semibold rounded-md' onClick={() => addToCart("DECREMENT", product)}>-</button>
                  )}
                  {!!quantity && <span className="mx-2 text-white font-semibold">{quantity}</span>}
                  {quantity === 0 ? (
                    <button className='text-xl text-slate-300' onClick={() => addToCart("ADD_TO_CART", product)}>
                      <TbShoppingBagPlus />
                    </button>
                  ) : (
                    <button className='text-xl font-semibold text-slate-300' onClick={() => addToCart("INCREMENT", product)}>+</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrideDress;