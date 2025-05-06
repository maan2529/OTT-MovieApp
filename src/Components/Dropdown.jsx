import React from 'react'

const Dropdown = ({ title, arrOptions, handleFun }) => {
    return (
        <div className='w-[14vw] h-8 select'>
            <select defaultValue='0' name={title} className='w-full h-full px-2 bg-zinc-800 text-sm  outline-none text-white bg-zinc-500 rounded-sm' onChange={handleFun} >
                <option value='0' disabled>{title.toUpperCase()}</option>
                {arrOptions.map((elem, index) => <option key={index} value={elem}>{elem.toUpperCase()}</option>)}

            </select>
        </div>

    )
}

export default Dropdown