import axios from 'axios';
import React, { useRef, useState } from 'react';

const AddMedicineBrand = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const locationRef = useRef();
    const imgRef = useRef();
    const [error,setError] = useState("")
    const handleOnSubmit = (e) => {
        axios.post('https://healthcare-management-system.vercel.app/api/v1/medicinebrand', {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            location: locationRef.current.value,
            imgRef : imgRef.current.value
        })
            .then(res => {
                
            })
            .catch(error => {
                // setError(error.response.data.error)
                 
            })
        // nameRef.current.value = ""
        // locationRef.current.value = ""
        // descriptionRef.current.value = ""
        // imgRef.current.value = ""
        e.preventDefault()
    }
    return (
        <div className='container mx-auto'>
            {error&& <h1>{error}</h1>}
        <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Medicine Brand</h1>
        <div className="form-control">
            <form className='bg-zinc-200' onSubmit={handleOnSubmit}>
                <label className="input-group">
                    <span className="w-40">Name</span>
                    <input required type="text" ref={nameRef} placeholder="Enter brand name"className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">Doctor Image Url</span>
                    <input required type="text" ref={imgRef} placeholder="Enter img link"  className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">Qualification</span>
                    <input required type="text" ref={descriptionRef} placeholder="Enter qualification" className="border-4 border-indigo-500/100 ..." />
                </label>
                <label className="input-group">
                    <span className="w-40">Specialist</span>
                    <input required type="text" ref={locationRef} placeholder="Enter Specialist" className="border-4 border-indigo-500/100 ..." />
                </label> 
                <button> ADD MedicineBrand</button>
            </form>
        </div>
    </div>
    );
};

export default AddMedicineBrand;