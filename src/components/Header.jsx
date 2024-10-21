import React from 'react'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='flex justify-between items-center p-4 bg-slate-100'>
            <img src={logo} className='w-[180px]' />
            <ul className='flex gap-4 md:gap-14'>
                <li className='hover:font-bold hover:bg-blue-500 hover:text-white hover:rounded-full p-3 cursor-pointer'>Home</li>
                <li className='hover:font-bold hover:bg-blue-500 hover:text-white hover:rounded-full p-3 cursor-pointer'>About Us</li>
                <li className='hover:font-bold hover:bg-blue-500 hover:text-white hover:rounded-full p-3 cursor-pointer'>Contact Us</li>
            </ul>
            <button className='bg-blue-400 rounded-full text-white p-3 font-bold hover:bg-blue-500'>Hello</button>
        </div>
    )
}

export default Header