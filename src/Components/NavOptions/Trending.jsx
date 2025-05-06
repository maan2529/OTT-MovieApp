import React, { use, useEffect, useState } from 'react'
import Topnav from '../Topnav'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../Dropdown'
import instance from '../../utils/axios'
import Cards from '../Cards'
import Loading from '../Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    document.title = 'OTT | Trending'
    const navigate = useNavigate()
    const [trending, setTrending] = useState([])
    const [category, setCategory] = useState('all')
    const [duration, setDuration] = useState('week')
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const fetchTrending = async () => {
        try {
            const { data } = await instance.get(`trending/${category}/${duration}`, {
                params: { page }
            })
            // append new items
            setTrending(prev => [...prev, ...data.results])
            // stop when we've fetched all pages
            setHasMore(data.page < data.total_pages)
            // bump page for next call
            setPage(prev => prev + 1)
        } catch (err) {
            console.error('Fetch error:', err)
        }
    }
    useEffect(() => {
        setTrending([])
        setPage(1)
        setHasMore(true)
        fetchTrending()
    }, [category, duration])

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleDuration = (e) => {
        setDuration(e.target.value)
    }


    return trending.length > 0 ? (
        <div id="scrollableDiv" className=' w-full h-screen overflow-hidden overflow-y-auto'>
            <div className=' w-full  h-[15%]  flex items-center justify-between px-8 text-xl text-zinc-300'>
                <div className='left  h-full  flex items-center justify-start'>
                    <div className='flex gap-[8%]  '>
                        <i onClick={() => navigate(-1)} className="ri-arrow-left-line  text-2xl cursor-pointer hover:text-[#6551CD]"></i>
                        <p className='mr-4'>Trending</p>
                    </div>

                </div>
                <div className='relative  right flex justify-end  items-center gap-5 h-full w-[65%]'>
                    <Topnav />
                    <Dropdown title="category" arrOptions={['all', 'tv', 'movie']} handleFun={handleCategory} />
                    <Dropdown title="duration" arrOptions={['week', 'day']} handleFun={handleDuration} />
                </div>
            </div >


            <div className='w-full h-full'>

                <InfiniteScroll
                    scrollableTarget="scrollableDiv"
                    className="flex flex-wrap justify-center gap-6 px-8 py-5"
                    dataLength={trending.length}
                    next={fetchTrending}
                    hasMore={hasMore}
                    loader={<p className='text-white '>Loading...</p>} 


                >
                    {trending.map((data, idx) => <Cards key={idx} data={data} />)}

                </InfiniteScroll>
            </div>

        </div >
    ) : <Loading />
}

export default Trending