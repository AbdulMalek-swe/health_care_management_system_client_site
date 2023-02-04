import React from 'react';
import { useParams } from 'react-router';
 
import pic from '../../../../assets/ui-animation.gif'
import '../Ambulance.css'
const AmbulanceDetailsServices = () => {
    const  od = useParams();
     
    return (
        <div>
            <div>
                <div className='ambulance-img'>
                    <img alt='loading...' src={pic} />
                </div>
                <div className='container'>
                 <div className='ambulance-card-section'>
                      
                 </div>
                </div>
            </div>
        </div>
    );
};

export default AmbulanceDetailsServices;