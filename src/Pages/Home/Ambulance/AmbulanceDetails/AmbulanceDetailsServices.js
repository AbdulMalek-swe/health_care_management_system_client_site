import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import pic from '../../../../assets/ui-animation.gif'
import '../Ambulance.css'
import AmbulanceCard from './AmbulanceCard';
const AmbulanceDetailsServices = () => {
    const {id} = useParams();
    
    const [ambulance,setAmbulance]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/ambulance")
        .then(response=>{
           if(id){
            const result = response.data.result.filter((item)=>item.category===id)
            setAmbulance(result)
           }
           else{
            setAmbulance(response.data.result)
           }
           
        })
        .catch(err=>{
         
        })
    },[id])
    return (
        <div className='container mx-auto'>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4 py-10   justify-center align-center">
                {
                 ambulance.map((ambulanceData ,index)=><AmbulanceCard   ambulanceData ={ambulanceData } key={index} />)
                }
            </div>
        </div>
    );
};

export default AmbulanceDetailsServices;