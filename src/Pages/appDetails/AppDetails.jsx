import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../components/Hooks/useApps';

const AppDetails = () => {
    const { id } = useParams();
    const { allApps } = useApps();

    const allApp = allApps.find(app => app.id === Number(id))

    //  console.log(allApp);
    const { image, title, companyName, description } = allApp || {}

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;