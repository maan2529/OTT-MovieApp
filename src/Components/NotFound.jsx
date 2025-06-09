import React from 'react'
import notFoundGif from '../assets/notFound.gif'

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img 
        src={notFoundGif}
        alt="404 Not Found"
        className="w-[500px] h-auto"
      />
    </div>
  )
}

export default NotFound 