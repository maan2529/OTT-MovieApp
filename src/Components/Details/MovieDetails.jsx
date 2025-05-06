import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadMovie, removeMovie } from '../../store/actions/movieActions';
import Loading from '../Loading';
import HorizontalCards from '../../Template/HorizontalCards';
import Trailer from './Trailer';

const MovieDetails = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate()
  const movieData = useSelector(state => state.movie.info)
  const { pathname } = useLocation()
  // console.log()
  console.log(movieData)

  const handleCategory = (e) => {


  }

  useEffect(() => {
    dispatch(asyncloadMovie(id))

    return () => {
      dispatch(removeMovie())
    }
  }, [id])

  return movieData ? (
    <div
      className='relative w-full  h-[155vh] overflow-x-hidden'
      style={{ background: " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))" }}
    >
      <img className='w-full h-full object-cover text-white' src={`https://image.tmdb.org/t/p/original/${movieData?.detail?.backdrop_path}`} alt="Wallpaper" />
      <div className='absolute w-full h-full object-cover inset-0'>

        {/* navigavtion */}
        <nav className='w-full h-[10vh] top-0'>
          <div className='w-full h-full flex gap-3 px-[5%]'>
            <div className='text-white h-full items-center font-xl flex gap-5 '>
              <i onClick={() => navigate(-1)} className="ri-arrow-left-line  text-2xl cursor-pointer hover:text-[#6551CD]"></i>
              <a href="/"><i className="ri-home-2-fill hover:text-[#6551CD]"></i></a>
              <a target='_blank' href={`https://en.wikipedia.org/wiki/${movieData.externalid.wikidata_id}`}><i className="ri-earth-fill hover:text-[#6551CD]"></i></a>
              <a target='_blank' href={`https://en.wikipedia.org/wiki/${movieData.externalid.imdb_id}`} className='hover:text-[#6551CD]'>imdb</a>
            </div>

          </div>

        </nav>
        {/*1 poster and details */}
        <div className='top-20 px-20   w-full flex  gap-4 '>
          <div className='flex flex-col mt-4'>
            <img className='shadow-[8px_17px_38px_2px_rgba(4,0,0,0.5)] mb-[2vw]  h-[25vw] w-[18vw] ' src={`https://image.tmdb.org/t/p/original/${movieData.detail.poster_path || movieData.detail.backdrop_path}`} alt="cardsImg" />

            <div className='flex flex-col gap-[2vw] text-white font-semibold'>
              {movieData.watchproviders && movieData.watchproviders.flatrate && (
                <div className='flex gap-[2vw]'>
                  <p>Available on Platforms </p>
                  {movieData.watchproviders.flatrate.map((w) => (
                    <img
                      title={w.provider_name}
                      className='w-[6vh] h-[6vh] rounded-md object-cover'
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}
              {movieData.watchproviders && movieData.watchproviders.rent && (
                <div className='flex gap-5'>
                  <p>Available on Rent</p>
                  {movieData.watchproviders.rent.map((w) => (
                    <img
                      title={w.provider_name}
                      className='w-[6vh] h-[6vh] rounded-md object-cover'
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}
              {movieData.watchproviders && movieData.watchproviders.buy && (
                <div className='flex gap-5'>
                  <p>Available to buy </p>
                  {movieData.watchproviders.buy.map((w) => (
                    <img
                      title={w.provider_name}
                      className='w-[6vh] h-[6vh] rounded-md object-cover'
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>
          {/* part 2 */}
          <div className='text-white flex flex-col'>

            <h1 className='font-bold text-[3.3vw]'>
              {movieData.detail.title || movieData.detail.name || movieData.detail.original_name || movieData.detail.original_title}
              <small className='text-xl font-bold text-zinc-200'>({movieData.detail.release_date.split("-")[0]})</small>
            </h1>
            <div className='flex text-zinc-200 gap-2 items-center'>
              <span

                className=' right-[-10%] top-[55%] bg-yellow-700 w-10 h-10 flex justify-center items-center rounded-full text-white'>
                {(movieData?.detail?.vote_average * 10).toFixed() ||
                  movieData?.detail?.popularity.toFixed()}
                <sup>%</sup>
              </span>
              <h1 className=''>User Score</h1>
              <h1>{movieData.detail.release_date}</h1>
              <h1>
                {movieData?.detail?.genres.map(g => g.name).join(", ")}
              </h1>
              <h1>{movieData?.detail?.runtime}min</h1>
            </div>
            <h1 className='text-md mt-2 font-semobold italic text-zinc-200'>
              {movieData?.detail?.tagline}
            </h1>
            <h1 className='text-xl font-semobold  text-zinc-200 mt-3'>Overview</h1>
            <p className='w-[55vw] text-sm'>{movieData?.detail?.overview}</p>

            <h1 className='font-semibold mt-2 text-md'>Movie Translated</h1>
            <p className='w-[55vw] text-sm'>{movieData?.translations?.translations.map(t => t.english_name).join(', ')}</p>

            <Link to={`/movies/details/${movieData?.detail?.id}/trailer`} className='px-5 py-2 bg-[#6551CD] w-fit rounded-sm mt-4' >Play Trailer</Link>
          </div>



        </div>
        <div className='px-12'>
          {movieData && movieData?.recommendations.length > 0 && <div className='mt-[5vw] w-[99.5%] px-2 '>
            <hr className='text-zinc-200 ' />
            <h1 className='mt-5 text-3xl font-bold text-white ml-5'>Recomendations & similar stuff</h1>
            {movieData?.recommendations ? <HorizontalCards trainding={movieData?.recommendations} handleCategory={handleCategory} heading={false} /> :
              <h1 className='text-3xl '>No Recommendations Available </h1>}

          </div>}</div>

      </div >
      <Outlet />
    </div >
  ) : <Loading />
}

export default MovieDetails