import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { SearchBar } from '../SearchBar';
import SignupForm from '../RegistrationForm/SignupForm';
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNavbarMenuVisible, setIsNavbarMenuVisible] = useState(false);
  const [state] = useCart();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (newResults) => {
    setSearchResults(newResults);

  }

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleNavbarMenu = () => {
    setIsNavbarMenuVisible(!isNavbarMenuVisible);
  };

  return (
    <nav className="mr-32">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../images/logo/Logo.png" className=" w-20 md:w-28" alt="Logo"/>
        </Link>

        <div id="navbar-default" className={`${isNavbarMenuVisible ? 'md:flex fixed z-50 w-full transform -translate-y-20 right-0' : 'hidden'} w-auto md:mr-32 md:block md:w-auto`}>
          <ul className="absolute z-50 bg-purple-900 top-2 font-semibold sm:top-0 sm:flex flex-col p-4 sm:right-0 md:left-10 md:relative md:p-0 mt-32 w-full md:w-0 border border-violet-900 rounded-lg md:flex-row lg:space-x-4 md:space-x-4 rtl:space-x-reverse md:mt-1 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white-800 md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/About" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">About</Link>
            </li>
            <li>
              <Link to="/SignUp" onClick={toggleFormVisibility} className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">SignUp</Link>
            </li>
            <li>
              <Link to="/cart" className="block text-2xl py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">
                {!!state.itemsCounter && <span className='absolute text-base ml-6 md:bottom-4 sm:bottom-9'>{state.itemsCounter}</span>}
                <PiShoppingCartSimpleBold/>
              </Link>
            </li>
            <li className="md:hidden">
              <div className='flex flex-wrap ml-2 w-full relative bottom-[10px]'>
                <SearchBar handleSearchResults={handleSearchResults}
                 isNavbarMenuVisible={isNavbarMenuVisible} 
                 toggleNavbarMenu={toggleNavbarMenu}
                />
              </div>
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap left-8 bottom-2 w-0 md:w-auto md:ml-0 relative md:relative select-none cursor-pointer'>
          <div className='hidden md:block'>
            <SearchBar handleSearchResults={handleSearchResults} />
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          onClick={toggleNavbarMenu}
          type="button"
          className="flex items-center relative left-20 sm:left-32 left-32 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 right-0"
          aria-controls="navbar-default"
          aria-expanded={isNavbarMenuVisible}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>

      <div className='absolute h-0'>
        <SignupForm toggleFormVisibility={toggleFormVisibility} isFormVisible={isFormVisible}/>
      </div>
    </nav>
  );
};

export default Navbar;
