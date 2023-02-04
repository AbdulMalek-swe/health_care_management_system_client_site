import React from 'react';

const AmbulanceCard = ({ ambulanceData  }) => {
    const {img,name,location,contact,ambulanceNumber,category,description} = ambulanceData;
    return (
        <div className="bg-white rounded shadow-lg p-2 border   grid   justify-center align-center">
            <div className="flex items-center mb-4">
                <img src={ img} alt="Ambulance" className="w-52 h-52 rounded-full mr-6" />
               
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Ambulance Number:</div>
                <div className="font-medium text-lg">{ambulanceNumber}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Driver Name:</div>
                <div className="w-full">{name}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Phone:</div>
                <div className="font-medium text-lg">{contact} </div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Location:</div>
                <div className="w-full">{ location}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Category:</div>
                <div className="w-full">{category}</div>
            </div>
            <div className="flex mb-6 justify-center align-center">
                 <button>Payment  </button>
            </div>
        </div>
    );
};

export default AmbulanceCard;