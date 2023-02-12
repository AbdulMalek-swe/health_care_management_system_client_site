import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FilterDoctor from './FilterDoctor';

const DoctorServices = () => {
    const [doctor, setDoctor] = useState([]);
    const [searchDoctor, setSearchDoctor] = useState('')
    // const location = useLocation();
    const [toggler, setToggler] = useState(true)
    let { id } = useParams();
    if (searchDoctor) {
        id = searchDoctor
    }
    if (!id) {
        id = ""
    }
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/doctor')
            .then(res => res.json())
            .then(data => {
                const filter = data.result.filter(item => item.specialist.toLowerCase().includes(id.toLowerCase()))
                if (!id) {
                    setDoctor(data.result);
                }
                else {
                    setToggler(true)
                    setDoctor(filter)
                }

            })
    }, [id]);
    return (
        <div>
            <div className='text-center container mx-auto'>
                <FilterDoctor setSearchDoctor={setSearchDoctor} />
                <div >
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4'>
                        {
                            doctor?.map(person =>  
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src={person.imgUrl} alt={person.name} className="w-full"/>
                            <div className="px-6 py-4">
                              <h3 className="text-lg font-medium">{person.name}</h3>
                              <h3 className="text-lg font-medium">{person.qualification}</h3>
                              <div className="flex    justify-center align-center">
                                <Rating
                              className='text-yellow-600'
                                        emptySymbol="fa-regular fa-star "
                                        fullSymbol="fa fa-star "
                                        initialRating={person.rating}
                                        readonly
                                    /> 
                              </div>
                              <p className="ml-2 my-2 text-black text-black">({person.specialist})</p>
                                
                              <p className=" bg-gray-200 rounded-full px-3 my-2 text-sm font-semibold text-gray-700 mr-2 d-block">
                        {person.fee}/-
                    </p>
                              <Link to={`/doctor/details/${person._id}`}><button className="btn btn-primary">Appointment</button></Link>
                            </div>
                          </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorServices;