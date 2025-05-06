import React from 'react'
import noImage from '/noImage.jpg'
import { Link } from 'react-router-dom'
const Header = ({ wallpaper }) => {
  console.log(wallpaper)
  return (
    <div className='w-full  h-[60%]  flex justify-center items-center '>
      <div
        className='relative w-full  h-full '
        style={{ background: " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))" }}
      >
        <img className='w-full h-full object-cover text-white' src={`https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path}`} alt="Wallpaper" />

        <div style={{ background: " linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0,0.9))" }} className='absolute top-[45%] w-full h-[55%] pointer-events-none '></div>
        <div className='absolute  w-[55%] bottom-[17%] left-[10%] text-white '>
          <h1 className='text-3xl pb-3 font-bold'>{wallpaper.title || wallpaper.name || wallpaper.original_name || wallpaper.original_title}</h1>
          {wallpaper ? <p className='text-sm'>{wallpaper?.overview?.slice(0, 300)}...<Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className='text-blue-600'>{` more`}</Link></p> : "Loading..."}

          <p className='my-2 mb-5 text-sm'>
            <i class="text-white text-yellow-500  ri-megaphone-fill"></i> {wallpaper.release_date || "No Information"}
            <i class="text-white text-yellow-500 ml-4 ri-album-fill"></i> {wallpaper.media_type?.toUpperCase()}
          </p>
          <Link to={`/movies/details/${wallpaper?.id}/trailer`} className='bg-[#6551CD] px-4 py-2 rounded '>Watch Trailer</Link>
        </div>


      </div>

    </div>
  )
}

export default Header