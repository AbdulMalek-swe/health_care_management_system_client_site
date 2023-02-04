import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const PharmacySingleProduct = ({item}) => {
    const {state,dispatch} =  useContext(AuthContext)
   
    return (
        <div> 
            <div className="card w-72 bg-base-100 shadow-xl  ">
                <figure ><img className='h-48' src={item.imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {item.name}
                    </h2>
                    <p> {item.description.slice(0,100)}</p>
                    <h3>{item.price} BDT/-</h3>
                    <div className="card-actions justify-end">
                        <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>Add To Cart</button>
                        <button>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacySingleProduct;