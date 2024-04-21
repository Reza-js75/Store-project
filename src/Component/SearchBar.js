import React, { useState } from 'react';
import { useProducts } from '../Context/ProductContext';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

// Utility function to filter products based on search query
const filterProducts = (products, query) => {
    const trimmedSearch = query.trim().toLowerCase();
    if (trimmedSearch) {
        return products.filter(product => 
            product.category.toLowerCase().includes(trimmedSearch)
        );
    } else {
        return [];
    }
}


const SearchBar = ({isNavbarMenuVisible, toggleNavbarMenu}) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const products = useProducts();
    const [search, setSearch] = useState("");

    const searchHandler = () => {
        const filteredProducts = filterProducts(products, search);
        navigate(`search?q=${encodeURIComponent(search)}`);
        if(isNavbarMenuVisible) {
            toggleNavbarMenu();
        }
    }



    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    }

    return (
        <div className='relative mt-2'>
            <div className='md:bg-purple-950 sm:bg-purple-900 text-lg left-12 md:relative text-blue-500 rounded md:hover:text-blue-500'>
                <input 
                    type='text' 
                    placeholder='Search...'
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className='rounded-sm focus:outline-none md:h-[31px] h-[30px] sm:h-[30px] w-[330px] sm:w-[0px] md:w-[200px]'
                />  
                          
                <button onClick={searchHandler} className='w-0  md:text-[31px] text-[30px] sm:text-[30px] border-y-8 border-gray-500'>
                    <IoIosSearch className='relative w-[30px] top-[9px] md:top-[9px] bg-white rounded-sm'/>
                </button>
            </div>
        </div>
    );
};

export  { SearchBar, filterProducts };


