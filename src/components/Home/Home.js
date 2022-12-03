import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-4 mx-auto'>
            <div>1</div>
            <div className='col-span-2'>2</div>
            <div>3</div>
        </div>
    );
};

export default Home;