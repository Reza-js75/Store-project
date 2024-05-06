import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src='../images/PageNotFound.png' alt='PageNotFound'/>
            </div>
            <div className='flex justify-center'>
                <Link to={"/"} className=' text-white hover:text-blue-400 my-10'>Go To Home</Link>
            </div>
            
        </div>
    );
};

export default PageNotFound;