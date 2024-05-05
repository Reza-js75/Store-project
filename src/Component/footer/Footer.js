import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../Context/RegistrationForm/UserProvider';
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
    const { user } = useUser();
    const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    
    const toggleDepartments = () => {
        setIsDepartmentsOpen(!isDepartmentsOpen);
    }

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen)
    }

    const togglePayment = () => {
        setIsPayment(!isPayment);
    }

    return (
        <footer className='border-t-2 mx-4 md:mx-32 border-gray-400 mb-4 '>
            <div className='flex justify-center font-bold mt-4'>
                <h1 className='text-gray-200 uppercase'>Social medias</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-5 mt-5 mb-10'>
                <Link><img src='../../images/icons/facebook.png' alt='icon-facebook'/></Link>
                <Link><img src='../../images/icons/x.png' alt='icon-x'/></Link>
                <Link><img src='../../images/icons/instagram.png' alt='icon-instagram'/></Link>
                <Link><img src='../../images/icons/youtube.png' alt='icon-youtube'/></Link>

            </div>

            <div className='mx-auto w-full max-w-screen-xl'>
                <div className='grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-t-2'>

                    <div className='relative h-[60px] left-20 sm:left-8 md:left-0 cursor-pointer border-[1px] p-1 bottom-2 w-[180px] rounded-[5px]'>
                        <div>
                            <span className='flex gap-4 font-bold mt-1 hover:text-blue-500 text-gray-200'><AiOutlineUser className='relative left-1 text-slate-200 text-[30px]'/>My Account</span>
                            {user && (
                                <span className='relative bottom-1 left-[40px] hover:text-blue-500 font-bold text-blue-400'>Welcome {user.name}</span>
                            )}
                        </div>

                    </div>

                    <div className=''>
                        <h1 className=' text-gray-50 w-[151px] font-bold cursor-pointer hover:text-blue-500 uppercase' onClick={togglePayment}>Payment Services</h1>
                        {isPayment && (
                            <div className='gap-5 sm:gap-5 md:gap-2 sm:w-[250px] md:w-[180px] grid grid-cols-3 mt-7 '>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/google-pay.png' alt='google-pay'/>
                                </Link>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/amazonPay.png' alt='amazonPay.png'/>
                                </Link>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/paypal.png' alt='paypal.png'/>
                                </Link>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/apple-pay.png' alt='apple-pay'/>
                                </Link>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/shopify.png' alt='shopify.png'/>
                                </Link>
                                <Link className='w-14 flex justify-center items-center'>
                                    <img src='../../images/icons/stripe.png' alt='stripe.png'/>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Contact Us */}
                    <div className='border-y-[1px] sm:border-y-[1px] md:border-y-0 items-center'>
                        <h1 className=' text-gray-50 w-[100px] font-bold mt-6 sm:mt-7 md:mt-0 hover:text-blue-500 cursor-pointer uppercase mb-5' onClick={toggleDepartments} >Departments</h1>
                        {isDepartmentsOpen && (
                            <div className='text-gray-400 font-semibold '>
                                <Link to={"/WinterProducts"} className='block hover:underline mb-3'>Women's winter clothes</Link>
                                <Link to={"/SummerProducts"} className='block hover:underline mb-3'>Women's summer clothes</Link>
                                <Link to={"/EveningDress"} className='block hover:underline mb-3'>Women's evening dress</Link>
                                <Link to={"/SportsProducts"} className='block hover:underline mb-3'>Women's sportswear</Link>
                                <Link to={"/SuitProducts"} className='block hover:underline mb-3'>Women's suit</Link>
                                <Link to={"/BrideDress"} className='block hover:underline mb-3'>Bride dress</Link>
                            </div>
                        )}
                    </div>
                    
                    <div className=''>
                        <h1 className=' text-gray-50 w-[100px] font-bold cursor-pointer hover:text-blue-500 uppercase mb-5' onClick={toggleContact}>Contact us</h1>
                        {isContactOpen && (
                            <form action="/submit_contact_form" method="post" className=" w-full mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-100 text-sm font-bold mb-2">UserName:</label>
                                    <input type="text" id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">Email:</label>
                                    <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-100 text-sm font-bold mb-2">Subject:</label>
                                    <input type="text" id="subject" name="subject" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-100 text-sm font-bold mb-2">Message:</label>
                                    <textarea id="message" name="message" rows="4" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                                </div>
                            </form>
                        )}
                    </div>

                    
                </div>

                <div className='flex w-full justify-center mt-5 sm:mt-5'>
                    <span className='text-gray-100 font-bold text-sm sm:text-sm md:text-base'>© 2024 Retail Ltd. All rights reserved.</span>
                </div>
            </div>


        </footer>
    );
};

export default Footer;


