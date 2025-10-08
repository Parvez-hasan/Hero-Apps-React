import React from 'react';
import useApps from '../../components/Hooks/useApps';
import AppCart from '../AppCart/AppCart';
import { Link } from 'react-router';

const Apps = () => {
    const {allApps, loading, error} = useApps();
   // console.log(allApps);
   const sixApps = allApps.slice(0,8)
    
    return (
        <div className=' bg-gray-100'>
            <h2 className='text-3xl font-semibold text-center px-3  py-5'>Trending Apps</h2>
            <p className='text-center text-gray-600 px-2 py-2'>Explore All Trending Apps on the Market developed by us</p>
             
             <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-4 '>           
                     {
                     sixApps.map(app => <AppCart key={app.id} app={app}></AppCart>)
                     }
             </div>
            
            <div className='flex justify-center items-center py-5'>
                  <Link to='/AllApp'>
                     <button className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm py-2 px-4'>                       
                         <span className='text-white font-stretch-50%'>Show All</span>      
                    </button>
                  </Link>
            </div>
           
        </div>
    );
};

export default Apps;