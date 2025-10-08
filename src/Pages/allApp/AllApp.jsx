import React, { useState } from 'react';
import downloadIcon from '..//..//assets/icon-downloads.png'
import starIcon from '..//..//assets/icon-ratings.png'
import useApps from '../../components/Hooks/useApps';
import { Link } from 'react-router';

const AllApp = ({id}) => {
      const { allApps } = useApps();

    const [search, setSearch] = useState('');
   // console.log(search);
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? allApps.filter(allApp => 
        allApp.name.toLocaleLowerCase().includes(term))
        : allApps
  // console.log(searchedApps);
   

    return (

        <div className='container mx-auto bg-gray-100 px-4 py-6'>

            <h1 className=' text-center text-3xl font-semibold px-3'>Our All Applications</h1>
            <p className='text-gray-500 text-center px-3 py-4'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between py-4 px-3'>

                <div>
                    <h1 className=' text-xl md:text-2xl font-semibold'> <span>({allApps.length})</span> Apps found</h1>
                </div>

                <label className="input py-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder=" App Search" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                allApps.map(allApps => <Link to='./appDetails'>
                 <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out border border-gray-400 ">
                        <figure className='h-72 overflow-hidden'>
                            <img className='w-full object-cover p-6'
                                src={allApps.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                             {allApps.title}
                            </h2>

                            <div className="card-actions justify-between">
                                <div className="badge badge-outline bg-gray-100">
                                    <img className='w-4 h-4' src={downloadIcon} alt="" />
                                    <span className='font-bold text-green-500'>{ }</span>
                                </div>
                                <div className="badge badge-outline bg-orange-100">
                                    <img className='w-4 h-4' src={starIcon} alt="" />
                                    <span className='font-bold text-orange-500'>{ }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </Link> )
                }
            </div>

        </div>
    );
};

export default AllApp;