import React, { use, useEffect, useState } from 'react'
import Topnav from '../Topnav'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../Dropdown'
import instance from '../../utils/axios'
import Cards from '../Cards'
import Loading from '../Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    document.title = 'OTT | pupular'
    const navigate = useNavigate()
    const [people, setPeople] = useState([])
    const [category, setCategory] = useState('movie')

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const fetchpeople = async () => {
        try {
            const { data } = await instance.get(`person/popular`, {
                params: { page }
            })

            setPeople(prev => [...prev, ...data.results])

            setHasMore(data.page < data.total_pages)

            setPage(prev => prev + 1)
        } catch (err) {
            console.error('Fetch error:', err)
        }
    }
    useEffect(() => {
        setPeople([])
        setPage(1)
        setHasMore(true)
        fetchpeople()
    }, [category])

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }



    return people.length > 0 ? (
        <div id="scrollableDiv" className=' w-full h-screen overflow-hidden overflow-y-auto'>
            <div className=' w-full  h-[15%]  flex items-center justify-between px-8 text-xl text-zinc-300'>
                <div className='left  h-full  flex items-center justify-start'>
                    <div className='flex gap-[8%]  '>
                        <i onClick={() => navigate(-1)} className="ri-arrow-left-line  text-2xl cursor-pointer hover:text-[#6551CD]"></i>
                        <p className='mr-4'>People</p>
                    </div>

                </div>
                <div className='relative  right flex justify-end  items-center gap-5 h-full w-[65%]'>
                    <Topnav />


                </div>
            </div >


            <div className='w-full h-full'>

                <InfiniteScroll
                    scrollableTarget="scrollableDiv"
                    className="flex flex-wrap justify-center gap-6 px-8 py-5"
                    dataLength={people.length}
                    next={fetchpeople}
                    hasMore={hasMore}
                    loader={<p className='text-white'>Loading...</p>} // Use your Loading component for consistency


                >
                    {people.map((data, idx) => <Cards key={idx} data={data} title='person'/>)}

                </InfiniteScroll>
            </div>

        </div >
    ) : <Loading />
}

export default Popular