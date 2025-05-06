import React, { useEffect, useState } from 'react'
import Sidenav from '../Template/Sidenav'
import Topnav from './Topnav'
import Header from '../Template/Header'
import instance from '../utils/axios'
import HorizontalCards from '../Template/HorizontalCards'
import Loading from './Loading'
const Home = () => {
  document.title = 'OTT | Homepage'
  const [wallpaper, setwallpaper] = useState(null);
  const [trainding, setTrainding] = useState(null);
  const [category, setCategory] = useState('all')
  const fetchTraindingImg = async () => {
    try {
      const { data } = await instance.get(`trending/all/day`)
      const randomPpr = Math.floor(Math.random() * data.results.length)
      setwallpaper(data.results[randomPpr])

    } catch (err) {
      console.error("trainding image error")
    }
  }
  const getTrainding = async () => {
    try {
      const { data } = await instance.get(`trending/${category}/day`);
      setTrainding(data);

    } catch (err) {
      console.log('Error is ', err);
    }
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)

  }
  useEffect(() => {
    !wallpaper && fetchTraindingImg()
    getTrainding();


  }, [category])
  return (wallpaper && trainding) ? (
    <>

      <Sidenav />
      <div className='w-[80%] h-full ml-[20%] overflow-y-auto'>
        <div className='w-full h-[10vh]  relative flex justify-center items-center z-[2]'>
          <Topnav />
        </div>

        <Header wallpaper={wallpaper} />
        <HorizontalCards trainding={trainding?.results} handleCategory={handleCategory} />
      </div>

    </>
  ) : <Loading />
}

export default Home