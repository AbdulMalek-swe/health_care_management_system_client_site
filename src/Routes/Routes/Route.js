import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DasboardLayout from '../../Layout/DasboardLayout';
import Main from '../../Layout/Main';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import DoctorHandle from '../../Pages/Dashboard/AddDoctor/DoctorHandle';
import AddAmbulance from '../../Pages/Dashboard/Ambulance/AddAmbulance';
import Donar from '../../Pages/Dashboard/Blood/Donar';
import AddDoctorCategory from '../../Pages/Dashboard/DoctorHandle/DoctorCategory/AddDoctorCategory';
import Medicine from '../../Pages/Dashboard/Medicine/Medicine/Medicine';
import AddMedicineBrand from '../../Pages/Dashboard/Medicine/MedicineBrand/AddMedicineBrand';
import MdicineBrand from '../../Pages/Dashboard/Medicine/MedicineBrand/MdicineBrand';
import Success from '../../Pages/Dashboard/Payment/Success';
import AmbulanceDetailsServices from '../../Pages/Home/Ambulance/AmbulanceDetails/AmbulanceDetailsServices';
import BloodHome from '../../Pages/Home/Blood/BloodHome';
import BloodRegister from '../../Pages/Home/Blood/BloodRegister';
import DoctorAppointment from '../../Pages/Home/Doctors/DoctorAppointment/DoctorAppointment';
import DoctorCategory from '../../Pages/Home/Doctors/DoctorCategory/DoctorCategory';
import DoctorSIngleCatetgory from '../../Pages/Home/Doctors/DoctorCategory/DoctorSIngleCatetgory';
import DoctorServices from '../../Pages/Home/Doctors/DoctorService/DoctorServices';
import FeedBack from '../../Pages/Home/Feedback/FeedBack';
import Home from '../../Pages/Home/Home/Home';
import MedicineBrand from '../../Pages/Home/MedicineBrand/MedicineBrand';
import MedicineBrandService from '../../Pages/Home/MedicineBrand/MedicineBrandService';
import MyAppointment from '../../Pages/Home/MyApppointment/MyAppointment';
import PharmacyService from '../../Pages/Home/Pharmacy/PharmacyService/PharmacyService';
import ProductCart from '../../Pages/Home/ProductCart/ProductCart';
import Profile from '../../Pages/Home/Profile/Profile';
import LoginProcess from '../../Pages/Login/LoginProcess';
import ErrorElement from '../../Pages/Shared/ErrorELement/ErrorElement';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'doctors/category/control',
                element: <DoctorCategory />
            },
            {
                path: 'doctors/category/:id',
                element: <DoctorServices />
            },
            {
                path: 'show/doctor',
                element: <DoctorServices />
            },
            {
                path: 'doctor/details/:id',
                element: <PrivateRoute> <DoctorAppointment /></PrivateRoute> ,
                loader: ({ params }) => fetch(`https://healthcare-management-system.vercel.app/api/v1/doctor/${params.id}`)
            },
            {
                path: 'doctor/myappointment/control',
                element: <PrivateRoute><MyAppointment /></PrivateRoute>  
            },
            {
                path: 'show/medicine',
                element: <PharmacyService />
            },
            {
                path: 'medicinebrand/brand',
                element: <MedicineBrand />
            },
            {
                path: 'medicinebrand/brand/:id',
                element: <MedicineBrandService />,
                loader: ({ params }) => fetch(`https://healthcare-management-system.vercel.app/api/v1/medicinebrand/${params.id}`)
            },
            {
                path: 'show/cart',
                element: <ProductCart />
            }, 
            {
                path: 'user/profile',
                element: <Profile />
            },
            {
               path:'donate/blood',
               element:<BloodHome/>
            },
            {
                path:'donate/blood/register',
                element:<BloodRegister/>
             },{
                path:'ambulance/show-up',
                element:<AmbulanceDetailsServices/>
             },
             {
                path:'ambulance/category/:id',
                element:<AmbulanceDetailsServices/>
             },
            {
                path: '/success/:id',
                element: <Success />
            },
            {
                path: 'user/login',
                element: <LoginProcess />
            },
            {
                path: 'user/feedback',
                element: <FeedBack />
            }
        ]
    }, {
        path: '/dashboard',
        element:  <PrivateRoute><DasboardLayout></DasboardLayout> </PrivateRoute>  ,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/adddoctor',
                element: <AddDoctor/>
            }, 
            {
                path: '/dashboard/showdoctor',
                element: <DoctorHandle/>
            },
            {
                path: '/dashboard/doctor/add/category',
                element: <AddDoctorCategory/>
            },
            {
                path: '/dashboard/medicine',
                element: <Medicine/>
            },
            {
                path: '/dashboard/medicinebrand',
                element: <MdicineBrand/>
            },
            {
                path: '/dashboard/addmedicinebrand',
                element: <AddMedicineBrand/>
            },
            {
                path: '/dashboard/blood/donar',
                element: <Donar/>
            },
            {
                path: '/dashboard/add/ambulance',
                element: <AddAmbulance/>
            },
        ]
    }
])

export default router;