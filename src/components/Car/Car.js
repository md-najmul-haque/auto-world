import React from 'react';
import { Link } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';

const Car = ({ car }) => {
    const { _id, carName, mileage, location, engine, transmission, img, price } = car
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                <div className='flex justify-between'>
                    <h2 className="card-title pb-5">{carName}</h2>
                    <span className='text-error px-5'>
                        <BiStar />
                    </span>
                </div>
                <figure>
                    <img src={img} alt="img" />
                </figure>
            </div>
            <div className="card-body">

                <div className='flex justify-between'>
                    <p><span className='text-gray-400'>Mileage:</span> {mileage} KM</p>
                    <p><span className='text-gray-400'>Location:</span>  {location}</p>
                </div>
                <div className='flex justify-between'>
                    <p><span className='text-gray-400'>Engine:</span> {engine}</p>
                    <p><span className='text-gray-400'>Transmission:</span> {transmission}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl font-bold'>{price}$ </p>
                    <Link to='' className="btn btn-error normal-case btn-sm px-5">More details</Link>
                </div>

            </div>
        </div>

    );
};

export default Car;