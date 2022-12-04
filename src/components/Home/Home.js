import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Home = () => {

    const { isLoading, error, cars } = useQuery({
        queryKey: ['cars'],
        queryFn: () =>
            fetch('http://localhost:5000/api/v1/car').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='grid grid-cols-4 mx-auto'>
            <div>1</div>
            <div className='col-span-2'>2</div>
            <div>3</div>
        </div>
    );
};

export default Home;