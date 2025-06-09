
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './Components/Home'
import Loading from './Components/Loading'
import Trending from './Components/NavOptions/Trending'
import Popular from './Components/NavOptions/Popular'
import Movies from './Components/NavOptions/Movies'
import TvShows from './Components/NavOptions/TvShows'
import People from './Components/NavOptions/People'
import MovieDetails from './Components/Details/MovieDetails'
import TvDetails from './Components/Details/TvDetails'
import PersonsDetails from './Components/Details/PersonsDetails'
import Trailer from './Components/Details/Trailer'
import NotFound from './Components/NotFound'
function App() {
  return (
    <div className='h-screen w-screen bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/details/:id' element={<MovieDetails />} >
          <Route path='/movies/details/:id/trailer' element={<Trailer />} />
        </Route>

        <Route path='/tvshows' element={<TvShows />} />

        <Route path='/tvshows/details/:id' element={<TvDetails />} >
          <Route path='/tvshows/details/:id/trailer' element={<Trailer />} />
        </Route>
        {/* Removed extra closing tag */}
        <Route path='/person' element={<People />} />
        <Route path='/person/details/:id' element={<PersonsDetails />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div >
  )
}

export default App
//primary #1F1E24
//secondary #6551CD