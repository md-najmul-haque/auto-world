import React from 'react';
import { useForm } from 'react-hook-form';

const AddCar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h3>this is add car</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter car name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("carName", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter Mileage"
                        className="input input-bordered w-full max-w-xs"
                        {...register("mileage", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter Engine"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Engine", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter Transmission"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Transmission", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Enter Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Price", { required: true, maxLength: 20 })} />
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>
                <input className='btn btn-primary' type="submit" />
            </form>

        </div>
    );
};

export default AddCar;