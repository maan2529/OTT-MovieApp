import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
const Trailer = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const category = pathname.includes('movies') ? 'movie' : 'tv'
    console.log(category);
    
    const trailerVideo = useSelector(state => state[category]?.info?.videos?.key)
    console.log(trailerVideo) // for tv it is undefined idk why...
    return (

        <div className='bg-zinc-800/30 absolute w-full h-screen top-0 left-0 flex justify-center pt-20 select-none'>

            <i onClick={() => navigate(-1)} className="ri-close-fill absolute top-[3vw] right-[5vw] text-2xl cursor-pointer hover:text-[#6551CD]"></i>
            {trailerVideo ?
                <div className='w-full h-full flex justify-center '>
                    <ReactPlayer
                        width='800px'
                        height={'450px'}
                        url={`https://www.youtube.com/watch?v=${trailerVideo}`} />
                </div>
                : <div>
                    <i onClick={() => navigate(-1)} className="ri-close-fill absolute  top-[3vw] right-[5vw] text-2xl cursor-pointer hover:text-[#6551CD]"></i>
                    <h1 className='absolute top-[50vh] left-[40vw] flex justify-center text-3xl text-bold text-red-400 text-white text-center'>No trailer available </h1>
                </div>}


        </div>



    )
}

export default Trailer