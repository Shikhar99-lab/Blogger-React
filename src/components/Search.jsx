import React, { useState } from "react";
import banner from '../assets/banner.png';
import { FaSearch } from "react-icons/fa";

function Search({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);  // Pass the query to the parent component
    };

    return (
        <div className='flex justify-center mt-5 flex-col md:px-[150px] px-[20px]'>
            <img src={banner} className='rounded-2xl' />
            <div className='bg-white shadow-lg p-4 rounded-lg mt-[-40px] mx-[15%] flex items-center'>
                <FaSearch />
                <input
                    type='text'
                    value={query}
                    onChange={handleSearchChange}
                    placeholder='Search...'
                    className='outline-none ml-2 focus:outline-none'
                />
            </div>
        </div>
    );
}

export default Search;