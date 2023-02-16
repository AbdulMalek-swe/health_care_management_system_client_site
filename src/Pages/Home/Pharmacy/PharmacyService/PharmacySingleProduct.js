import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const PharmacySingleProduct = ({ item }) => {
    const { state, dispatch } = useContext(AuthContext)
    const [phone,setPhone] = useState("")
    console.log(phone);
    const medicinePay = e => {
        axios.post(`http://localhost:5000/api/v1/init`, {
            phone: phone,
            category: item?.category,
            name: item?.name,
            id: item?._id
        })
            .then(res => {
                console.log(res);
                window.location.replace(res.data.result)
                // setAppointment(res.data.result)
            })
            .catch(error => {

                // setError(error.message)
            })
        e.preventDefault()
    }
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-52" src={item.imgUrl} alt={item.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">{item.description.slice(0, 100)}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {item.price}
                    </span>
                   
                    <label htmlFor="my-modal" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-1 btn">MedicineOrder</label>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold w-full rounded mt-2 block " onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                   <input type="tel"  placeholder='enter your phone number' onChange={(e)=>setPhone(e.target.value)}/>
                    <div className="modal-action">
                      {
                        phone.length>=11&&  <button onClick={() => medicinePay()}>
                        Medicine Order</button>
                      }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacySingleProduct;