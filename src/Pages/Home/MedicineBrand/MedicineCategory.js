import React from 'react';
import { Link } from 'react-router-dom';

const MedicineCategory = ({brand}) => {
    
    return (
        <div className='container mx-auto'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4'>
            {brand.map((item, index) => <Link to={`/medicinebrand/brand/${item._id}`} key={index}> <div>
                <div className="c  w-full">
                    <img src={item?.imgRef} alt="Avatar" className="category-image w-full" />
                    <div className="category-overlay">
                    </div>
                </div>
                <div className="cardFooter text-center my-10">
                    <h5 className='my-3'>For your child whitest teeths</h5>
                    <h1 className='my-3'> {item.name}</h1>
                    <p className='my-3'>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
                </div>
            </div>
            </Link>)}
        </div>
    </div>
    );
};

export default MedicineCategory;