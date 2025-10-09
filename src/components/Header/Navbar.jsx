import React from 'react';
import navlogo from '..//..//assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    const links = <>
    <NavLink to='/'><span className='px-3 font-semibold hover:font-bold'>Home</span></NavLink>
    <NavLink to='/AllApp'><span className='px-3 font-semibold hover:font-bold'>Apps</span></NavLink>
    <NavLink to='/Intalled'><span className='px-3 font-semibold hover:font-bold'>Installation</span></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <Link to='/' className='flex justify-center items-center'>
                
                          <figure><img className='h-8 w-8' src={navlogo} alt="" /></figure>
                          <a className=" text-purple-500 btn-ghost text-2xl md:text-3xl font-bold"> Hero.IO</a>
    
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}                 
                </ul>
            </div>
            <div className="navbar-end">

                <a className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm py-2 px-4' href='https://github.com/Parvez-hasan' target='_blank'>
                     <div className='flex justify-center items-center gap-2'>
                         <FaGithub className='text-white'></FaGithub>
                         <span className='text-white font-stretch-50%'>Contribute</span>
                      </div>
               </a>

            </div>
        </div>
    );
};

export default Navbar;