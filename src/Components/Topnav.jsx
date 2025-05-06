import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../utils/axios.js'
import noImage from '/noImage.jpg'
const Topnav = () => {

    const [handleInput, setHandleInput] = useState('');
    const [search, setSearch] = useState([])
    const handleInputFun = (e) => {
        setHandleInput(e.target.value);

    }
    const getSearch = async () => {
        try {
            const res = await instance.get(`search/multi?query=${handleInput}`)
            if (res) {
                setSearch(res.data.results);
            }


        } catch (err) {
            console.log("Error is ", err)
        }
    }

    useEffect(
        () => {
            getSearch()

        },
        [handleInput])
    return (
        <div className='relative w-[53%]'>

            <div className='flex py-[5px] w-full rounded-full bg-tansparent px-4 bg-[#2F2E34]'>
                <i className="ri-search-2-line text-xl text-zinc-400 w-[5%] shrink-0"></i>
                <input
                    type="text"
                    value={handleInput}
                    className='py-1 pl-4 w-[90%] outline-none  text-zinc-300 text-sm shrink-1'
                    placeholder='Search anything'
                    onChange={(e) => handleInputFun(e)}
                />
                {handleInput.length !== 0 && <i
                    onClick={(e) => {
                        setHandleInput('')

                    }}
                    className="ri-close-fill text-xl w-[5%] text-zinc-400 shrink-0"></i>}

            </div>

            <div className='absolute top-[90%] left-[5%] bg-zinc-500 w-[90%] size-auto max-h-[50vh] overflow-auto rounded-md z-10'>

                {search.map((data, index) => <Link
                    key={index}
                    to={`/${(data.media_type === 'movie') ? 'movies' : 'tvshows'}/details/${data.id}`}
                    className=' font-semibold bg-zinc-400 hover:bg-zinc-500 text-zinc-600 text-sm duration-800 hover:text-black px-[3vw] p-3 w-[100%] flex flex-row justify-start items-center border-b-1 border-zinc-500 rounded-md ' >
                    <img src="" alt="" />

                    <span className='pl-2 flex items-center gap-3'>
                        <img className='w-[3vw] h-[3vw] rounded-md shadow-md' src={data.backdrop_path || data.profile_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}` : noImage} alt="" />

                        {data.title || data.name || data.original_name || data.original_title}</span>
                </Link>)}


            </div>

        </div >
    )
}

export default Topnav