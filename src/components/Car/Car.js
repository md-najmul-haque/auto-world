import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    const { _id, carName, mileage, location, engine, transmission, img, price } = car
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                <h2 className="card-title pb-5">{carName}</h2>
                <figure>
                    <img src={img} alt="img" />
                </figure>
            </div>
            <div className="card-body">

                <div className='flex justify-between'>
                    <p>Mileage: {mileage}</p>
                    <p>Location: {location}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Engine: {engine}</p>
                    <p>Transmission: {transmission}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Price: {price}</p>
                    <Link to='' className="btn btn-error btn-sm px-5">More details</Link>
                </div>

            </div>
        </div>

    );
};

export default Car;