import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../Car/Car';
import Loading from '../Shared/Loading';
import { BsBriefcase } from 'react-icons/bs';
import { AiOutlineDollarCircle, AiOutlinePlus, AiOutlineSetting, AiOutlineTool } from 'react-icons/ai';
import { IoLocationOutline, IoColorPaletteOutline } from 'react-icons/io5';

const Home = () => {

    const { data: cars, isLoading, refetch } = useQuery(['cars'], () =>
        fetch('http://localhost:5001/api/v1/car')
            .then(res => res.json())
    )

    // const { isLoading, error, cars } = useQuery({
    //     queryKey: ['cars'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/api/v1/car').then(res =>
    //             res.json()
    //         )
    // })

    refetch();

    console.log(cars)

    if (isLoading) {
        return <Loading />
    }



    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-3'>
                    {
                        cars.result.map(car => <Car key={car._id} car={car} />)
                    }
                </div>

                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <div className='flex justify-between pb-5 items-center'>
                        <li><Link to=''> <BsBriefcase />Basic Information</Link></li> <AiOutlinePlus />
                    </div>
                    <div className='flex justify-between pb-5 items-center'>
                        <li><Link to=''> <AiOutlineDollarCircle /> Car Cost</Link></li> <AiOutlinePlus />
                    </div>
                    <div className='flex justify-between  pb-5 items-center'>
                        <li><Link to=''> <IoLocationOutline /> Search Region</Link></li> <AiOutlinePlus />
                    </div>
                    <div className='flex justify-between  pb-5 items-center'>
                        <li><Link to=''> <AiOutlineTool /> Vehicle Cost</Link></li> <AiOutlinePlus />
                    </div>
                    <div className='flex justify-between  pb-5 items-center'>
                        <li><Link to=''> <AiOutlineSetting /> Add. Characteristics</Link></li> <AiOutlinePlus />
                    </div>
                    <div className='flex justify-between  pb-5 items-center'>
                        <li><Link to=''> <IoColorPaletteOutline /> Color</Link></li> <AiOutlinePlus />
                    </div>
                </ul>

            </div>
        </div>




    );
};

export default Home;