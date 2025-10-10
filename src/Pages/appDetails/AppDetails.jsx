import React from 'react';

import { useParams } from 'react-router';
import useApps from '../../components/Hooks/useApps';
import downIcon from '..//..//assets/icon-downloads.png'
import starIcon from '..//..//assets/icon-ratings.png'
import rainkIcon from '..//..//assets/icon-review.png'
import Rechart from '../Rechart/Rechart';


const AppDetails = () => {
    const { id } = useParams();
    const { allApps, loading } = useApps();

    const appId = parseInt(id);

    const allApp = allApps.find(app => app.id === appId);

   // console.log(allApp);
    const { image, title, companyName, downloads,ratingAvg, reviews, description } = allApp || {};

   if(loading) return <p className='text-3xl py-6 text-center'>loading...</p>

  // install and localestrage added
    const handleInstalled = () => {
        const existingList = JSON.parse(localStorage.getItem('installed'))
        let updeteList = []
        if(existingList){
            const noDuplicate = existingList.find(ap => ap.id === allApp.id)
            if(noDuplicate) return alert('allredy added')
            updeteList = [...existingList, allApp]
        } else{ 
            updeteList.push(allApp)
        }
        localStorage.setItem('installed', JSON.stringify(updeteList))
    }


    return (
        <div className='container mx-auto'>

           {/* apps details section */}
            <div className="flex flex-col md:flex-row justify-center items-center bg-base-100 shadow-sm gap-4 md:gap-6 p-6">
                <figure className=' flex justify-center w-full md:w-80'>
                    <img  className='h-48 w-48 md:h-80 md:w-80 object-cover rounded-lg'
                        src={image}
                        alt="Album" />
                </figure>
                <div className=" w-full md:w-4/6">
                    <h3 className='text-[#001931] font-bold text-2xl md:text-3xl'>{title}</h3>
                    <p className='text-[#627382] text-md'>Developed by <span className='text-violet-600'>{companyName}</span></p>
                    <hr className='text-gray-400 mt-3 w-full hidden md:block' />
                
                    <div className=''>
                        <div className='mt-3 flex gap-3 md:gap-6 p-3'>
                            <div className='space-y-1'>
                               <img src={downIcon} alt="" />
                                <p className='text-[#627382]'>Downloads</p>
                                <p className='text-[#001931] text-xl md:text-2xl font-extrabold'>{downloads}</p>
                            </div>
                            <div className='space-y-1'>
                               <img src={starIcon} alt="" />
                                <p className='text-[#627382]'>Average Ratings</p>
                                <p className='text-[#001931] text-xl md:text-2xl font-extrabold'>{ratingAvg}</p>
                            </div>
                            <div className='space-y-1'>
                                <img src={rainkIcon} alt="" />
                                <p className='text-[#627382]'>Total Reviews</p>
                                <p className='text-[#001931] text-xl md:text-2xl font-extrabold'>{reviews}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleInstalled} className="btn btn-accent text-white mt-4  w-auto md:block">Install Now</button>
                </div>
                 
            </div>

             {/* ratings section */}
                <div className='py-4'>
                 <Rechart></Rechart>
                </div>
                
             {/* description section  */}

               <div className='p-6'>
                <h1><span className='text-2xl font-semibold'>Description : <br /></span> {description}</h1>
               </div>
        </div>
            );
};

            export default AppDetails;