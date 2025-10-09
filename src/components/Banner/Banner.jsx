import React from 'react';
import googlePlayLogo from '..//..//assets/google-play-removebg-preview.png'
import appStoreLogo from '..//..//assets/App-Store-removebg-preview.png'
import heroImg from '..//..//assets/hero.png'
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='container mx-auto bg-gray-100'>

            <div className='px-4 md:px-8 py-8'>
                <h1 className='text-3xl md:text-5xl font-bold text-center w-2/5 mx-auto'>We Build <br /><span className='text-purple-600'>Productive</span> Apps</h1>
                <p className='text-center mx-auto text-gray-600 py-3 px-5 md:px-8 lg:px-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center items-center gap-3 px-4 mt-4'>
                    <button className='btn'>
                        <a className='flex items-center' href='https://play.google.com/store/apps/' target='_blank'>
                            <figure>
                                <img className='w-6 h-6 mr-1 ' src={googlePlayLogo} alt="" />
                            </figure>
                            <span>Google Play</span>
                        </a>
                    </button>
                    <button className='btn'>
                        <a className='flex items-center' href='https://www.apple.com/app-store/' target='_blank'>
                            <figure>
                                <img className='w-6 h-6 mr-1' src={appStoreLogo} alt="" />
                            </figure>
                            <span>App Store</span>
                        </a>
                    </button>
                </div>
            </div>
            {/* Hero Image section */}
            <div className='flex justify-center items-center px-3'>
                <figure>
                    <img src={heroImg} alt="" />
                </figure>
            </div>

            {/* States section */}
            <div className='h-auto w-auto bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center px-3 py-4 md:py-7 lg:py-10 '>
                 <h1 className='text-white text-2xl md:text-3xl font-semibold text-center mx-auto px-3 py-4'>Trusted by Millions, Built for You</h1>
                      
                    <div className=' max-w-5/6 container mx-auto flex flex-col md:flex-row items-center justify-evenly mt-4 space-y-5 md:space-y-0 lg:space-y-0'>
                        <div className='text-white'>
                            <p>Total Downloads</p>
                             <div className='flex items-center gap-6'>
                                <h1 className='text-4xl font-bold py-2'>29.6M</h1>
                                <FaDownload className='w-7 h-7'></FaDownload>
                             </div>
                            <p>21% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p>Total Reviews</p>
                             <div className='flex gap-6 items-center'>
                                 <h1 className='text-4xl font-bold py-2'>906K</h1>
                                 <FaStar className='w-7 h-7'></FaStar> 
                             </div>
                            <p>46% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p>Active Apps</p>
                             <div className='flex items-center gap-6'>
                                <h1 className='text-4xl font-bold py-2'>132+</h1>
                                <FaGooglePlay className='w-7 h-7'></FaGooglePlay>
                             </div>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Banner;