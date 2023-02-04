import axios from 'axios';
import React, { useState } from 'react';
import AmbulanceServices from '../Ambulance/AmbulanceService/AmbulanceServices';
import Banner from '../Banner/Banner';
import DoctorCategory from '../Doctors/DoctorCategory/DoctorCategory';
import MedicineBrand from '../MedicineBrand/MedicineBrand';
 
const Home = () => {
       return (
        <div>
             
            <Banner/>
            <DoctorCategory/>
            <MedicineBrand/>
            <AmbulanceServices/>
        </div>
    );
};

export default Home;