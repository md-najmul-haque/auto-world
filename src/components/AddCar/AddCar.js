import React from 'react';
import { useForm } from 'react-hook-form';


const AddCar = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = "659c9f3714e59a5aab97b06d91ac3782"

    const onSubmit = data => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success === true) {
                    const car = {
                        carName: data.carName,
                        mileage: data.mileage,
                        location: data.location,
                        engine: data.engine,
                        transmission: data.transmission,
                        img: result.data.url,
                        price: data.price,
                    }

                    fetch('http://localhost:5001/api/v1/car', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(car)

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.status === 'success') {
                                reset()
                                // console.log(data)
                            }
                        })

                }
            })




    };






    return (
        <div>
            <h3>this is add car</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-96 mx-auto'>
                    <div className="card w-96 bg-base-100 p-5 shadow-xl">
                        <h2 className='text-2xl font-semibold text-center p-5'>Add Car</h2>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Enter car name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("carName", {
                                    required: {
                                        value: true,
                                        message: "Car name is required"
                                    }
                                })} />
                            <label className="label">
                                {errors.carName?.type === 'required' && <span className="label-text-alt text-red-600">{errors.carName.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="number" placeholder="Enter Mileage"
                                className="input input-bordered w-full max-w-xs"
                                {...register("mileage", {
                                    required: {
                                        value: true,
                                        message: "Mileage is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.mileage?.type === 'required' && <span className="label-text-alt text-red-600">{errors.mileage.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Enter Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Location is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-600">{errors.location.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Enter Engine"
                                className="input input-bordered w-full max-w-xs"
                                {...register("engine", {
                                    required: {
                                        value: true,
                                        message: "Engine is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.engine?.type === 'required' && <span className="label-text-alt text-red-600">{errors.engine.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Enter Transmission"
                                className="input input-bordered w-full max-w-xs"
                                {...register("transmission", {
                                    required: {
                                        value: true,
                                        message: "Transmission is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.transmission?.type === 'required' && <span className="label-text-alt text-red-600">{errors.transmission.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="file" placeholder="Enter Car Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.transmission?.type === 'required' && <span className="label-text-alt text-red-600">{errors.transmission.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mx-auto">
                            <input type="number" placeholder="Enter Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price is required"
                                    },
                                })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary' type="submit" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddCar;