import React from 'react';
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import navlogo from '..//..//assets/logo.png'
const Footer = () => {
    return (
        <footer className="container mx-auto  bg-[#001931]  ">
            <div className='footer sm:footer-horizontal text-neutral-content justify-between p-10'>
                <nav>
                    <div className='flex justify-center items-center'>
                        <figure><img className='h-6 w-6' src={navlogo} alt="" /></figure>
                        <a className="text-white btn-ghost text-xl font-bold"> Hero.IO</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="text-xl text-white">Social Links</h6>
                    <div className='flex gap-5 py-2'>
                        <span>
                            <FaXTwitter className=" text-white rounded-full"/>
                        </span>
                        <span>
                            <FaLinkedin className=" text-white rounded-full"/>
                         </span>
                          <span>
                            <FaFacebook className=" text-white rounded-full"/>
                         </span>
                    </div>
                </nav>
            </div>
            <hr className='p-0.5 w-4/5 mx-auto bg-gray-600'/>
            <p className='text-center text-gray-200 py-4 px-3'>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;