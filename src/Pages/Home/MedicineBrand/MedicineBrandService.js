import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MedicineBrandService = ( ) => {
    const {state,dispatch} =  useContext(AuthContext)
   
      const {result}= useLoaderData();
      let [value,setValue] = useState("");
      let [medicine,setMedicine] = useState([]);
      useEffect(()=>{
            if(value){
            
              const filter = result.medicine.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))   
              setMedicine(filter);
            }
            else{
               setMedicine(result.medicine)
            }
      },[value])
    return (
       <div className='my-24'>
           <div className='container mx-auto'> 
           <div  className='my-24'>             
                <input type="text"  onChange={(e) => setValue(e.target.value)} placeholder="Search necessery medicine" className="border border-purple-900" style={{ border: "1px indigo solid" }}  />
           </div>
          {
            medicine.map(item=> <div className="card w-72 bg-base-100 shadow-xl  " key={item._id}>
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
        </div> )
          } 
    </div>
       </div>
    );
};

export default MedicineBrandService;