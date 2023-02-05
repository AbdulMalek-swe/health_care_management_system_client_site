import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import FilterMedicine from './FilterMedicine';
import PharmacySingleProduct from './PharmacySingleProduct';
import './Pharmacy.css'
 
const PharmacyService = () => {
  const location = useLocation();

  const [medicine, setMedicine] = useState([])
  const [filterMedicine, setFilterMedicine] = useState("");
  // const [category, setCategory] = useState("");
  const [page,setPage] = useState(0)
  useEffect(() => {
    fetch(`https://healthcare-management-system.vercel.app/api/v1/medicine?category=${filterMedicine}&page=${page}`)
      .then(res => res.json())
      .then(data => {
          setMedicine(data.result?.result);
          const count = data.result?.count;
      })
      .catch(error => {})
  }, [filterMedicine ]);
  const pageCount =(event,pageNumber=1)=>{
   
  }
  return (
    <div className=' '>
      <div className="sidebar py-40">
     
        <div className='my-24'>
        <FilterMedicine   setFilterMedicine={setFilterMedicine} />
        </div>
      </div>
      <div className="content  ">
      
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-40 '>
          
          {medicine.map((item, index) =>
            <PharmacySingleProduct key={item._id} item={item} />
          )}
          {/* {
            <div className="btn-group">
            <button className="btn" onClick={(event,number)=>pageCount(event,number)}>1</button>
             
          </div>
          } */}
        </div>
      </div>
    </div>
  );
};

export default PharmacyService;