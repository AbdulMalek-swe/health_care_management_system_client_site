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
                            doctor?.map(person => <div className="card      border border-gray-200  " key={person._id}>
                                <figure><img className='w-full h-60' src={person.imgUrl} /></figure>
                                <div className="pt-0 pl-2 pb-2 card-body text-left bg-[#fff]">
                                    <div className="cardFooter text-left my-4">
                                        <h5 className=' '>{person?.name}</h5>
                                        <h1 className=' '> {person?.specialist}</h1>
                                        <p className=' '>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.  </p>
                                        <h5>visit : {person.visitTime}</h5>
                                        <p className=' '>  <Rating
                                        emptySymbol="fa-regular fa-star fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={person.rating}
                                        readonly
                                       
                                    /></p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/doctor/details/${person._id}`}><button className="btn btn-primary">Appointment</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorServices;