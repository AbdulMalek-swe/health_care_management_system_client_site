import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Profile = () => {
    const { userProfile } = useContext(AuthContext)
    
    return (
        <div className='container flex justify-center'>
             
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
       
       
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {userProfile?.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{userProfile?.status}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
           
        </div>
    </div>
</div>
    
        </div>
    );
};

export default Profile;