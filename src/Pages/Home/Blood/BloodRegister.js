import axios from 'axios';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
// import {FaChevronLeft } from 'react-icons/fa'
const BloodRegister = () => {
  const { register, handleSubmit ,control,reset} = useForm();
  const term = useWatch({control,name:"term"})
  const navigate = useNavigate();
  const bloodGroup = [
    'selected','A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'
  ]
  const onSubmit = (data) => {
  
     axios.post("https://healthcare-management-system.vercel.app/api/v1/blood",data)
     .then(response=>{
      
     })
     .catch(error=>{
       
     })
    reset();
  }
  return (
    <div className='pt-14' >
      <div className='flex justify-center items-center'>
        <button type="button" onClick={() => navigate("/donate/blood/")} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ">See Donar</button></div>
      <div className='flex justify-center items-center overflow-auto p-10'>

        <form
          className='bg-slate-300  shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className='w-full text-2xl text-primary mb-5'>Donar Register</h1>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='firstName'>
              First Name
            </label>
            <input type='text' id='firstName' {...register("firstName")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='lastName'>
              Last Name
            </label>
            <input type='text' id='lastName' {...register("lastName")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='email'>
              Email
            </label>
            <input type='email' id='email'   {...register("email")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <h1 className='mb-3'>Gender</h1>
            <div className='flex gap-3'>
              <div>
                <input
                  type='radio'
                  id='male'
                  {...register("gender")}
                  value='male'
                />
                <label className='ml-2 text-lg' htmlFor='male'>
                  Male
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='female'
                  {...register("gender")}
                  value='female'
                />
                <label className='ml-2 text-lg' htmlFor='female'>
                  Female
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='other'
                  {...register("gender")}
                  value='other'
                />
                <label className='ml-2 text-lg' htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className='w-full mt-2 bg-black' />

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='bloodGroup'>
              Blood Group
            </label>
            <select {...register("bloodGroup")} id='bloodGroup'>
              {bloodGroup
                .map((category,index) => (
                  <option value={category} key={index}>{category}</option>
                ))}
            </select>
          </div>
          <div className='flex justify-between items-center w-full mt-3'>
            <div className='flex  w-full max-w-xs'>
              <input
                className='mr-3'
                type='checkbox'
                {...register("term")}
                id='terms'
              />
              <label htmlFor='terms'>I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodRegister;