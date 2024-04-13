import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide scroll to top button based on scroll position
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) { // Change 300 to adjust when the button appears
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to top
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed bottom-4 right-4'>
        {isVisible && (
            <button onClick={scrollToTop} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full">
                <FaArrowCircleUp className='w-8' />
            </button>
        )}
    </div>
  );
};

export default ScrollToTopButton;