import React from 'react'
import banner from '../assets/banner.png'
import { FaSearch } from "react-icons/fa";

function Search() {
    const tags = [
        {
            name: 'All'
        },
        {
            name: 'React'
        },
        {
            name: 'Angular'
        },
        {
            name: 'PHP'
        },
        {
            name: 'Node'
        },
        {
            name: 'AWS'
        },
    ]
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <>
            <div className='flex justify-center mt-5 flex-col md:px-[150px] px-[20px]'>
                <img src={banner} className='rounded-2xl' />
                <div className='bg-white shadow-lg p-4 rounded-lg mt-[-40px] mx-[15%] flex items-center'>
                    <FaSearch /><input type='text' placeholder='Search...' className='outine-none ml-2 focus:outline-none' />
                </div>
                <div className='flex gap-10 justify-center mt-5'>
                    {tags.map((item, index) => (
                        <ul key={index} onClick={() => setActiveIndex(index)} className={`${index == activeIndex ? 'font-bold bg-blue-500 text-white rounded-full p-3 cursor-pointer' : 'hover:font-bold hover:bg-blue-500 hover:text-white hover:rounded-full p-3 cursor-pointer transition-all duration-300 ease-in-out'}}`}>
                            <li>{item.name}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search