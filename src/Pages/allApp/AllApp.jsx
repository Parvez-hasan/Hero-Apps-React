import React from 'react';
import downloadIcon from '..//..//assets/icon-downloads.png'
import starIcon from '..//..//assets/icon-ratings.png'
import useApps from '../../components/Hooks/useApps';

const AllApp = () => {
    const {allApps} = useApps();
    const {image, title, downloads, ratingAvg} = allApps;
    return (
        <div>

            <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out ">
                <figure className='h-72 overflow-hidden'>
                    <img className='w-full object-cover p-6'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline bg-gray-100">
                            <img className='w-4 h-4' src={downloadIcon} alt="" />
                            <span className='font-bold text-green-500'>{downloads}</span>
                        </div>
                        <div className="badge badge-outline bg-orange-100">
                            <img className='w-4 h-4' src={starIcon} alt="" />
                            <span className='font-bold text-orange-500'>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllApp;