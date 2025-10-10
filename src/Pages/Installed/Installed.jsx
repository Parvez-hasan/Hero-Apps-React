import React, { useEffect, useState } from 'react';
import downIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';

const Installed = () => {
  const [addApp, setAddApp] = useState([]);

  useEffect(() => {
    const appList = JSON.parse(localStorage.getItem('installed'));
    if (appList) setAddApp(appList);
  }, []);

  console.log(addApp);

  return (
    <div className="bg-gray-100 container mx-auto">
      <div className="p-7">
        <div className="flex flex-col justify-between items-center py-8 px-3">
          <h1 className="text-2xl md:text-4xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-600 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between gap-3 py-4 px-4">
          <h3 className="font-medium md:font-bold">Apps Found: {addApp.length}</h3>
          <div>
            <button className="btn">Sort By Size</button>
          </div>
        </div>

        {/* app list */}
        <div className="flex flex-col gap-4">
          {addApp.map((appList) => (
            <div
              key={appList.id}
              className="flex flex-col space-y-4 md:flex-row justify-between items-center bg-white rounded p-4 shadow"
            >
              <div className="flex justify-center items-center gap-4">
                <div>
                  <img className="h-16 w-16" src={appList?.image} alt={appList.title} />
                </div>
                <div>
                  <h1 className="font-semibold md:font-bold py-2"> {appList.title}</h1>
                  <div className="flex gap-4 text-gray-600 text-sm mt-1">
                    <div className="flex items-center gap-1">
                      <img className="w-4 h-4" src={downIcon} alt="" />
                      <span className='font-semibold'>{appList.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img className="w-4 h-4" src={starIcon} alt="" />
                      <span className='font-semibold'>{appList.rating || '5'}</span>
                    </div>
                    <div className='flex gap-1 font-semibold'>
                      <span>{appList.size}</span>
                      <p>MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn bg-green-500 text-white">Installed</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installed;
