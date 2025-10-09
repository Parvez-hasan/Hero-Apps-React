import React from 'react';
import useApps from '../../components/Hooks/useApps';
import { Bar, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const {allApps} = useApps();

    const rainkData = allApps[0]?.ratings
  //  console.log(rainkData);
    
  
    return (
        <div className='container mx-auto p-4 mt-1 max-w-[1150px] h-[400px]'>
              <h2 className=' font-bold md:text-3xl p-3'>Ratings</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <ComposedChart data={rainkData} width={900} height={400} layout='vertical' margin={{ bottom:6, right:30, left: 30, top: 25}}>
                    
                    <XAxis type='number'></XAxis>
                    <YAxis type='category' dataKey='name' scale={'band'}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar fill='orange' barSize={40} dataKey={'count'} ></Bar>
                   

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Rechart;