import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LocationWrapper from './styled';

const Locations = () => { 
    
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/locations').then((response) => {
            setLocations(response.data[0]);
        });

    }, []);

    const maxLength = 40;
    return (
        <div className='container mt-5 mb-5'>
            <h3>Our Locations</h3>
            <div className='location-container'>
                {locations.map(x => 
                    <LocationWrapper>         
                        <img src='../../images/vehicle.png' alt="" />          
                        <div className='location-info'>
                            <h4>{x.location_name}</h4>
                            <div className='location'>
                                <div><img src="../../images/shop.png" alt="location_name"/></div>
                                <div>{x.address_line}</div>
                            </div>
                            <div className='pin'>
                                <div><img src="../../images/pin.png" alt="location_name"/></div>
                                <div>{x.pin.substr(0, maxLength)}</div>
                            </div>
                            <div className='share'>
                                <div><img src="../../images/share.png" alt="location_name"/></div>
                                <div>{x.share.substr(0, maxLength)}</div>
                            </div>
                        </div>
                    </LocationWrapper>
                )}
            </div>
        </div>
    );
}

export default Locations
