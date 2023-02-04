import React from 'react';
import {  BDLocations } from "react-bd-location";

const AddAmbulance = () => {
    return (
        <div>
               <div  >
               <BDLocations
  onChange={(e) => console.log(e,"district")}
  bn={true}
  className="bg-white rounded shadow-lg p-2 border w-96"
  
/>
    </div>
    
        </div>
    );
};

export default AddAmbulance;