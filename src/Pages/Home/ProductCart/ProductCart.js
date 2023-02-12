import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ProductCart = () => {
    const {state,dispatch} = useContext(AuthContext);
    console.log(state);
    return (
        <div>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-40 '>
          
          {state?.cart.map((item, index) =>
              <div key={item?._id} className="card w-72 bg-base-100 shadow-xl  ">
              <figure ><img className='h-48' src={item?.imgUrl} alt="Shoes" /></figure>
              <div className="card-body">
                  <h2 className="card-title">
                     {item?.name}
                  </h2>
                  <p> {item?.description?.slice(0,100)}</p>
                  <p>{item?.quantity}</p>
                  <h3>{item?.price*item?.quantity} BDT/-</h3>
                  <div className="card-actions justify-end">
                      <button onClick={()=>dispatch({type:"REMOVE_TO_CART",payload:item})}>REMOVE FROM CART</button>
                      <button>Order</button>
                  </div>
              </div>
          </div>
          )}
        </div>
        </div>
    );
};

export default ProductCart;