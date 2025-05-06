import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    const heading = [
        { type: "Tranding", icon: <i class="ri-fire-fill pr-2"></i>, to: '/trending' },
        { type: "Popular", icon: <i class="ri-magic-fill pr-2"></i>, to: '/popular' },
        { type: "Movies", icon: <i class="ri-movie-line  pr-2"></i>, to: '/movies' },
        { type: "Tv Shows", icon: <i class="ri-tv-2-fill pr-2"></i>, to: '/tvshows' },
        { type: "People", icon: <i class="ri-team-fill pr-2"></i>, to: '/person' },
    ]
    const websiteInfo = [
        { type: "About ", icon: <i class="ri-information-line  pr-2"></i>, },
        { type: "Contact Us", icon: <i class="ri-phone-fill  pr-2"></i> },

    ]
    return (
        <div className='fixed w-[20%] h-full  border-r-1 border-zinc-400 text-white px-5' >
            <div className='font text-xl font-bold p-auto pt-3 '>
                <i className=" text-[#6551CD] ri-tv-fill" ></i>
                <span className=' pl-1'>Movie App</span>
            </div>

            <nav className='  flex flex-col  text-zinc-400'>
                <h1 className='text-white text-ml font-semibold mt-7 mb-3'>Nav Heading</h1>
                <div className='flex flex-col w-[95%] text-sm'>
                    {heading.map((category, index) => <Link to={category.to} key={index} className='duration-800 hover:bg-[#6551CD] p-1 hover:text-white rounded-sm  my-2 pl-3 py-2'>{category.icon}{category.type}
                    </Link>)}
                </div>
                <hr className='mr-5 border-zinc-400' />

                <h1 className='text-white text-ml font-semibold mt-7 mb-3'>Nav Heading</h1>
                <div className='flex flex-col w-[95%] text-sm'>
                    {websiteInfo.map((category, index) => <Link key={index} to="#" className='duration-800 hover:bg-[#6551CD] p-1 hover:text-white rounded-sm  my-2 pl-3 py-2'>{category.icon}{category.type}
                    </Link>)}
                </div>
            </nav>


        </div>
    )
}

export default Sidenav