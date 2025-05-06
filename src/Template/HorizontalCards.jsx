import React from 'react'
import HorizontalCard from '../Components/HorizontalCard'
import Dropdown from '../Components/Dropdown';

const HorizontalCards = ({ trainding, handleCategory, heading = true }) => {
    const tempTraindingData = trainding;
    // console.log(tempTraindingData)
    return (
        <>
            {heading && <div className='flex justify-between items-center px-5 pt-2'>
                <h1 className='mt-3 pl-5 text-white text-2xl '>Trending</h1>
                <Dropdown title="category" arrOptions={['all', 'tv', 'movie']} handleFun={handleCategory} />
            </div >}

            <div className='w-full h-[39vh] p-5  flex gap-2 justify-start items-center overflow-x-auto '>
                {tempTraindingData.map((data, index) => <HorizontalCard key={index} trainding={data} />)}
            </div>
        </>

    )
}

export default HorizontalCards