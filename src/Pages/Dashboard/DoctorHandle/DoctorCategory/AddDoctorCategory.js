import axios from 'axios';
import React, { useRef, useState } from 'react';

const AddDoctorCategory = () => {

    const imgRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    
    const handleOnSubmit = (e) => {
        axios.post('https://healthcare-management-system.vercel.app/api/v1/addDoctorCategory', {
          
            img: imgRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            
        })
            .then(res => {
                
            })
            .catch(error => {
            
            })
        
        descriptionRef.current.value = ""
        categoryRef.current.value = ""
        imgRef.current.value =""
        e.preventDefault()
    }
    return (
        <div className='container mx-auto'>
        <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Doctor</h1>
        <div className="form-control">
            <form className='bg-zinc-200' onSubmit={handleOnSubmit}>
               
                <label className="input-group">
                    <span className="w-40">Doctor Image </span>
                    <input required type="text" ref={imgRef} placeholder="Enter img link" className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">description</span>
                    <input required type="text" ref={descriptionRef} placeholder="Enter description" className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">category</span>
                    <input required type="text" ref={categoryRef} placeholder="Enter category" className="border-4 border-indigo-500/100 ..." />
                </label>
                
                <button> ADD DOCTOR CATEGORY</button>
            </form>
        </div>
    </div>
    );
};

export default AddDoctorCategory;