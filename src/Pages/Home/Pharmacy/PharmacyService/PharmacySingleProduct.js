import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const PharmacySingleProduct = ({ item }) => {
    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            {/* <div className="card w-72 bg-base-100 shadow-xl  ">
                <figure ><img className='h-48' src={item.imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {item.name}
                    </h2>
                    <p> {item.description.slice(0,100)}</p>
                    <h3>{item.price} BDT/-</h3>
                    <div className="card-actions justify-end">
                        <button >Add To Cart</button>
                        <button>Order</button>
                    </div>
                </div>
            </div> */}



            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-52" src={item.imgUrl} alt={item.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">{item.description.slice(0,100)}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {item.price}
                    </span>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PharmacySingleProduct;