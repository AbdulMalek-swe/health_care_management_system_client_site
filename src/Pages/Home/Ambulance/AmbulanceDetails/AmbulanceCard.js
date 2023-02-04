import React from 'react';

const AmbulanceCard = ({ ambulanceData, pic }) => {
    return (
        <div className="bg-white rounded shadow-lg p-2 border   grid   justify-center align-center">
            <div className="flex items-center mb-4">
                <img src={pic} alt="Ambulance" className="w-52 h-52 rounded-full mr-6" />
                <div className="font-medium text-lg">{ambulanceData?.ambulanceNo}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Ambulance Number:</div>
                <div className="font-medium text-lg">{ambulanceData?.driverName}ds</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Driver Name:</div>
                <div className="w-full">{ambulanceData?.driverName}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Phone:</div>
                <div className="font-medium text-lg">{ambulanceData?.driverName}019xxxxxx</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Location:</div>
                <div className="w-full">{ambulanceData?.location}</div>
            </div>
            <div className="flex mb-4">
                <div className="w-full font-medium mr-2">Category:</div>
                <div className="w-full">{ambulanceData?.location}</div>
            </div>
            <div className="flex mb-6 justify-center align-center">
                 <button>Payment  </button>
            </div>
        </div>
    );
};

export default AmbulanceCard;