import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCard = ({ trainding }) => {


  return (
    <Link to={`/${(trainding?.media_type === 'movie') ? 'movies' : 'tvshows'}/details/${trainding.id}`} className='w-35 h-[100%] shrink-0 overflow-hidden bg-zinc-800 cursor-pointer'>
      <div className='w-full h-[50%] '>
        <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${trainding?.backdrop_path || trainding?.profile_path}`} alt="traindingPic" />
      </div>

      <div className='text-white p-2'>
        <h1 className='text-sm mb-2'>{trainding.title || trainding.name || trainding.original_name || trainding.original_title}</h1>
        <p className='text-xs'>{trainding.overview.slice(0, 40)}...<Link className='text-blue-500'>more</Link>
        </p>
      </div>
    </Link>
  )
}

export default HorizontalCard