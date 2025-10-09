import React, { Suspense, useState } from 'react';
import useApps from '../../components/Hooks/useApps';
import { Link } from 'react-router';
import SingleAllApp from '../singleAllApp/SingleAllApp';

const AllApp = () => {
    const { allApps, loading } = useApps();
  //  console.log(allApps);


    const [search, setSearch] = useState('');

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? allApps.filter(allApp =>
        allApp.title.toLocaleLowerCase().includes(term))
        : allApps
    // console.log(searchedApps);
      if(loading) return <p className='text-3xl py-6 text-center'>loading...</p>
  
    return (

        <div className='container mx-auto bg-gray-100 px-4 py-6'>

            <h1 className=' text-center text-3xl font-semibold px-3'>Our All Applications</h1>
            <p className='text-gray-500 text-center px-3 py-4'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between py-4 px-3'>

                <div>
                    <h1 className=' text-xl md:text-2xl font-semibold'> <span>({searchedApps.length})</span> Apps found</h1>
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

            {/* all apps section */}
            <Suspense fallback={<span className='text-3xl py-6 text-center'>Loading....</span>}>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        searchedApps.map(SingleApp => <SingleAllApp key={SingleApp.id} SingleApp={SingleApp}></SingleAllApp>
                        )
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default AllApp;