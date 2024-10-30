import React from 'react'
import banner from '../assets/banner.png'
import { FaSearch } from "react-icons/fa";

function Search() {
    
    return (
        <>
            <div className='flex justify-center mt-5 flex-col md:px-[150px] px-[20px]'>
                <img src={banner} className='rounded-2xl' />
                <div className='bg-white shadow-lg p-4 rounded-lg mt-[-40px] mx-[15%] flex items-center'>
                    <FaSearch /><input type='text' placeholder='Search...' className='outine-none ml-2 focus:outline-none' />
                </div>
            </div>
        </>
    )
}

export default Search