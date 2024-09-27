import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='h-[80px] bg-transparent sticky top-0 z-50'>
        <div className='flex items-center h-full'>
            <div className='flex items-center justify-start w-[80%]'>
              <Link to="/">
                <img className='mx-10' width={"140px"} src='https://pngimg.com/uploads/netflix/netflix_PNG12.png' alt='Netflix logo' />
                </Link>

                <ul className='flex text-white text-lg font-semibold space-x-4'>
                  <Link to="/">
                  <li className='hover:text-gray-500'><a href='#'>Home</a></li>
                  </Link>
                  
                   <Link to="/tv"><li className='hover:text-gray-500'><a href='#'>TV Shows</a></li></Link>
                   <Link to="/movies"><li className='hover:text-gray-500'><a href='#'>Movies</a></li></Link>
                   <Link to="/mylist"><li className='hover:text-gray-500'><a href='#'>Popular</a></li></Link>
                </ul>
            </div>

            <div className='w-[20%] flex justify-end mr-10 text-white text-lg font-semibold items-center'>
                <IoSearch className='mx-2 hover:text-gray-500' size={"25px"} />
                <a className='mx-2 hover:text-gray-500' href='#'>Kids</a>
                <FaRegBell className='mx-2 hover:text-gray-500' size={"25px"} />
                <CgProfile className='mx-2 hover:text-gray-500' size={"25px"} />
            </div>
        </div>
    </div>
  );
}

export default Navbar;
