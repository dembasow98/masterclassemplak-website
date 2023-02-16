import React from 'react'
import {BsFillCaretLeftSquareFill,BsFillCaretRightSquareFill } from "react-icons/bs";
import { FaHandMiddleFinger } from "react-icons/fa";


const Topbar = () => {
  return (
    <div className='flex w-full h-24 sm:h-22 md:h-16 lg:h-14 bg-white text-black dark:text-white dark:bg-gray-900'>
      <div className='flex flex-col md:flex-row w-full bg-green-400 items-center justify-center mx-8 md:mx-6 lg:mx-4'>
        <div className='flex items-center justify-between w-full px-4 mx-auto bg-yellow-300'>
          <div className='right-part '>
          <BsFillCaretLeftSquareFill className='text-3xl ' />
          </div>
          <div className='middle-part'>
            <FaHandMiddleFinger className = "text-3xl"/>
          </div>
          <div className='left-part'>
            <BsFillCaretRightSquareFill className='text-3xl' />
          </div>
        </div>
        
        <div className='flex flex-row items-center justify-between w-full px-4 mx-auto bg-pink-300'>
          <ul className='flex flex-row items-center justify-between w-full px-4 mx-auto'> 
              <li>
                <a href="https://www.facebook.com/">₺</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">$</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">€</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">£</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar