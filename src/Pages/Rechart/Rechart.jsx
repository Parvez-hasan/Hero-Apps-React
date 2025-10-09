import React from 'react';
import useApps from '../../components/Hooks/useApps';
import { Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const {allApps} = useApps();
   console.log(allApps);

    const rainkDate = allApps?.ratings
  
    return (
        <div className='container mx-auto p-3 mt-3 max-w-[1100px] h-[400px] border-amber-400'>
            <ResponsiveContainer width='100%' height='100%'>
                <ComposedChart data={rainkDate} width={800} height={370} layout='vertical'>
                    
                    <XAxis type='number'></XAxis>
                    <YAxis type='category' dataKey='name' scale={'band'}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar fill='orange' barSize={40} dataKey={'count'}></Bar>
                   

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Rechart;