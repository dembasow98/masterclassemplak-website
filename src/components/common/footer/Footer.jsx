import React from 'react'
import logo from '../../../assets/images/logos/logo1.png'
import { Link } from 'react-router-dom'
import yel2 from '../../../assets/images/separators/yellow/yel2.png'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#043334]">
        <div className="flex flex-col items-center  py-3 justify-center">
            <div className="flex-shrink-0 justify-center">
                <Link to="/">
                    <img src={logo} alt="logo" className=" w-42 h-36 " />
                </Link>
            </div>
        </div>
        <div className="flex my-2 w-full justify-center items-center space-x-2">
            <img src={yel2} alt="visa" />
        </div>
        <div className="p-6  items-center justify-center">
            <div className="flex w-full flex-row justify-between lg:justify-center px-6">
                <div className='lg:px-10'>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-300">Menu</h2>
                
                    <ul className="grid md:grid-cols-3 md:gap-x-10  lg:grid-cols-5 text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/" className=" hover:underline">Home</a>
                        </li>
                        <li className="mb-4">
                            <a href="/about" className="hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="/properties" className="hover:underline">Properties</a>
                        </li>
                        <li className="mb-4">
                            <a href="/news" className="hover:underline">News</a>
                        </li>
                        <li className="mb-4">
                            <a href="/blogs" className="hover:underline">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div className='lg:px-20'>
                    <h2 className="mb-6 text-sm font-semibold uppercase text-gray-300">Help center</h2>
                    <ul className="grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.facebook.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Facebook</a>    
                        </li>
                        <li className="mb-4">
                            <a href="https://www.twitter.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Twitter</a>    
                        </li>
                        <li className="mb-4">
                            <a href="https://www.intagram.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Instagram</a>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='flex flex-col py-6  md:flex-row justify-center items-center text-sm font-sm text-gray-500 dark:text-gray-300 sm:text-center'> 
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-gray-700 text-xl dark:text-gray-200">Follow Us</span>
                    <div className='flex items-center justify-center gap-6 lg:gap-10 '>
                        <div className='flex flex-col items-center justify-center space-y-2 px-6'>
                            <FaFacebookF className='w-10 h-10 text-gray-400'/>
                            <span className="text-gray-700 hover:cursor-pointer hover:text-gray-100 font-md dark:text-gray-300">
                                <a href="https://www.facebook.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Facebook</a>    
                            </span>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2 px-6'>
                            <FaTwitter className='w-10 h-10 text-gray-400'/>
                            <span className="text-gray-700 hover:cursor-pointer hover:text-gray-100 font-md dark:text-gray-300">
                                <a href="https://www.twitter.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Twitter</a>    
                            </span>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2 px-6'>
                            <FaInstagram className='w-10 h-10 text-gray-400' />
                            <span className="text-gray-700 hover:cursor-pointer hover:text-gray-100 font-md dark:text-gray-300">
                                <a href="https://www.instagram.com/masterclassproperty" target='_blank' rel='noopener noreferrer'>Instagram</a>    
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="flex flex-col justify-center md:px-4 w-full bg-gray-900 py-4 items-center border-t border-gray-600">
            <span className="text-sm text-center font-medium text-gray-500 pb-2 dark:text-gray-300">
                Copyright © 2023 <Link to="/" className='text-bold'>Master Class Property</Link>. All Rights Reserved.
            </span>
            <span className="text-sm font-bold text-gray-200 sm:text-center ">
                Made with ❤️ by <a href="https://www.linkedin.com/in/demba-sow-95903a22a/" target='_blank' rel="noreferrer" className="hover:underline">Demba Sow</a>
            </span>
        </div> 
    </footer>

  )
}

export default Footer