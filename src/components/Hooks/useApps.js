import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useApps = () => {

  const [allApps, setAllApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

//    data fetch

useEffect(() => {

    setLoading(true)
 axios('/appsData.json')
  .then(data => setAllApps(data.data))

  .catch(err => console.log(err))
  .finally(() => setLoading(false))

}, [])


    return {allApps, loading, error}
};


export default useApps;