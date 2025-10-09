import React from 'react';
import downIcon from '..//..//assets/icon-downloads.png'
import starIcon from '..//..//assets/icon-ratings.png'

const Installed = () => {
    return (
        <div className='bg-gray-100 container mx-auto'>
            <div className='p-7'>
                <div className='flex flex-col justify-between items-center  py-8 px-3'> 
                    <h1 className='text-2xl md:text-4xl font-bold '>Your Installed Apps</h1>
                    <p className='text-gray-600 mt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                < div className='flex justify-between py-4 px-4'>
                    <h3 className='font-bold'>1 Apps Found</h3>
                    <div>
                        
                       <button className='btn '>Sort By Size</button>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-white rounded p-4'>
                    <div className=''>
                        <img src="" alt="" />
                        <div>
                            <h1>Title</h1>
                            <div className='flex gap-4'>
                                <div className='flex'>
                                    <img  className='w-6 h-6' src={downIcon} alt="" />
                                    <h3>9M</h3>
                                </div>
                                <div className='flex'>
                                    <img className='w-6 h-6' src={starIcon} alt="" />
                                    <span>5</span>
                                </div>
                                <div><span>258 MB</span></div>
                            </div>

                        </div>
                    </div>
                    <button className='btn bg-green-500 text-white'>Installed</button>
                </div>
            </div>
        </div>
    );
};

export default Installed;