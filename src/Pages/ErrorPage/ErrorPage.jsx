import React from 'react';
import errorImg from '..//..//assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='bg-gray-100 py-8 px-4'>
            <figure className='flex mx-auto justify-center px-4'>
                <img className='h-42 w-42 md:h-80 md:w-80' src={errorImg} alt="" />
            </figure>
            <h2 className='text-2xl md:text-4xl text-center font-bold'>Oops, page not found!</h2>
            <p className='text-center text-gray-600 py-3 px-3'>The page you are looking for is not available.</p>
            <Link to='/'>
                <button className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm py-2 px-4 flex mx-auto justify-center items-center'>                       
                   <span className='text-white font-stretch-50%'>Go Back!</span>      
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;