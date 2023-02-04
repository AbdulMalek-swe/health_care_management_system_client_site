import React from 'react';
import { useParams } from 'react-router';

import pic from '../../../../assets/ui-animation.gif'
import '../Ambulance.css'
import AmbulanceCard from './AmbulanceCard';
const AmbulanceDetailsServices = () => {
    const od = useParams();
    console.log(od);
    const data = [1,2,3,4,5,6]
    return (
        <div className='container mx-auto'>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-10   justify-center align-center">
                {
                    data.map((item,index)=><AmbulanceCard pic={pic} />)
                }
            </div>
        </div>
    );
};

export default AmbulanceDetailsServices;