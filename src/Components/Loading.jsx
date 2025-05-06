import React from 'react';
import loading from '../assets/loading1.gif';

const Loading = () => {
    return (
        <div className="loading-container w-full h-screen flex justify-center items-center bg-black">
            <img className='h-[50%]' src={loading} alt="Loading..." />

        </div>
    );
};

export default Loading;