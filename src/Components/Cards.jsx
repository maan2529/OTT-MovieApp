import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data, title }) => {
    console.log(data)
    return (

        <Link to={`/${title ||(( data.media_type === "movie") ? 'movies' : 'tvshows')}/details/${data.id}`} className='relative w-45 h-73 flex flex-col mx-[2%] ' >
            <img className='w-full h-[85%] shadow-[8px_17px_38px_2px_rgba(4,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${data?.poster_path || data?.backdrop_path || data.profile_path}`} alt="cardsImg" />
            <div className='flex h-[15%] flex-col px-2 mt-2'>
                <p className='text-zinc-300  w-full font-bold'>{data.title || data.name || data.original_name || data.original_title}</p>
                <div
                    className='absolute right-[-10%] top-[55%] bg-yellow-700 w-10 h-10 flex justify-center items-center rounded-full text-white'>
                    {(data?.vote_average * 10).toFixed() ||
                        data?.popularity.toFixed()}
                    <sup>%</sup>
                </div>
            </div>

        </Link>


    )
}

export default Cards