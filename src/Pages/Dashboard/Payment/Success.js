import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/ui-animation.gif'
const Success = () => {
    return (
        <div className='container mx-auto text-center'>
             <img src={img} alt="...loading"  />
             <Link to="/"><button>Back to home</button></Link>
        </div>
    );
};

export default Success;