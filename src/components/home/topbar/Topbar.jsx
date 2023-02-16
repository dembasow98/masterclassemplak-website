import React from 'react'
import {MdOutlineManageSearch} from "react-icons/md";
import {FaEthereum} from "react-icons/fa";
import {SiBitcoin, SiLitecoin} from "react-icons/si";
import {TiGroup} from "react-icons/ti";


const Topbar = () => {
  return (
    <div className='flex w-full h-24 sm:h-22 md:h-16 lg:h-14 bg-white text-black dark:text-white dark:bg-gray-900  border-b dark:border-gray-300'>
      <div className='flex flex-col md:flex-row w-full items-center justify-center md:mx-6 lg:mx-4'>
        
        <div className='TOP-PART md:order-2 flex items-center justify-between md:justify-center w-full px-4 '>
          <div className='LEFT-PART flex flex-row p-2 gap-3'>
            
            <div className='CURENCY items-center justify-between w-full px-2 py-1 rounded-md border-2 border-red-700'>
              <ul className='flex gap-3 flex-row' > 
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
            
            <div className='LANGUAGES flex w-full bg-yellow-800 px-3 md:px-4 rounded-md justify-center items-center'>
              <a href="https://www.facebook.com/">Language</a>
            </div>
          </div>

          <div className='BUY-ONLINE flex w-full  justify-end place-items-center'>
            <button type="button" class="w-fit focus:outline-none text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              BUY ONLINE
            </button>
          </div>
          
        </div>

        <div className='BOTTOM-PART md:order-1 flex flex-row items-center justify-center gap-3 w-full px-4 mx-auto '>

          <div className='USER flex flex-row  p-2 gap-3'>
            <div  className='flex w-full bg-yellow-800 px-3 md:py-2 rounded-md justify-center items-center'>
              <a className='flex w-full items-center gap-2' href="https://www.facebook.com/">
                <TiGroup className='text-xl md:text-2xl'/>
                <span className='text-sm hidden md:inline-flex'>Login/Register</span>
              </a>
            </div>
          </div>

          <div className='PAYMENT'>
            <ul className='flex flex-row gap-3'>
              <li>
                <a href="https://www.instagram.com/">
                  <SiBitcoin className='text-xl md:text-2xl'/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaEthereum className='text-xl md:text-2xl'/>
                </a>
              </li>
              
              <li>
                <a href="https://www.twitter.com/">
                  <SiLitecoin className='text-xl md:text-2xl'/>
                </a>
              </li>
              <span className='text-sm md:text-lg '>Accepted here</span>
            </ul>
            
          </div>
          
          <div className='SEARCH flex flex-row p-2 gap-3'>
            <div className='flex w-full px-3 rounded-md justify-center items-center'>
              <a className='flex w-full items-center gap-2' href="https://www.facebook.com/">
                <MdOutlineManageSearch className='text-xl md:text-2xl'/>
                <span className='text-sm md:text-lg hidden md:inline-flex'>Search</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Topbar;