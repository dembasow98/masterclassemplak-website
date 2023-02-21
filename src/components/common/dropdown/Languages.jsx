import React, {useState} from 'react'

import {AiFillCaretDown} from 'react-icons/ai'

const Languages = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    

  return (
    <div className="relative inline-block text-left">
        <div>
            <button onClick={toggleDropdown} type="button" className="inline-flex w-full justify-center rounded-md focus:dark:bg-gray-800 dark:text-white focus:bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Language
                <AiFillCaretDown className="w-6 mt-1 ml-1"/>
            </button>
        </div>

        {showDropdown && (
            <div className="absolute right-0 z-10 mt-2 w-fit px-2 origin-top-right rounded-md  bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-2 px-2 font-bold" role="none">
                    <a href="#" className="text-gray-700 px-6 flex flex-row items-center rounded-md dark:text-gray-200 py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-sm mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-tr" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                        <span>Türkçe</span>
                    </a>
                    <a href="#" className="text-gray-700 px-6 flex flex-row items-center rounded-md dark:text-gray-200 py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-sm mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                        <span>English</span>
                    </a>
                    <a href="#" className="text-gray-700 px-6 rounded-md dark:text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-sm mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ae" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                        <span>العربية</span>
                    </a>
                    <a href="#" className="text-gray-700 px-6 rounded-md dark:text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">
                        <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-sm mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 512 512"><g fillRule="evenodd" strokeWidth="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>              
                        <span>Français</span>
                    </a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Languages