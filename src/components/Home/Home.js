import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Car from '../Car/Car';
import Loading from '../Shared/Loading';

const Home = () => {

    const { data: cars, isLoading, refetch } = useQuery(['cars'], () =>
        fetch('http://localhost:5000/api/v1/car')
            .then(res => res.json())
    )

    // const { isLoading, error, cars } = useQuery({
    //     queryKey: ['cars'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/api/v1/car').then(res =>
    //             res.json()
    //         )
    // })

    console.log(cars)

    if (isLoading) {
        return <Loading />
    }



    return (
        <>
            {
                cars.result.map(car => <Car key={car._id} car={car} />)
            }
        </>
    );
};

export default Home;