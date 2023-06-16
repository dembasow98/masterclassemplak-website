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
            <button onClick={toggleDropdown} type="button" className="inline-flex w-full justify-center rounded-md focus:bg-gray-800 text-white  px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Language
                <AiFillCaretDown className="w-6 mt-1 ml-1"/>
            </button>
        </div>

        {showDropdown && (
            <div className="absolute right-0 z-10 mt-2 w-fit px-2 origin-top-right rounded-md  bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-2 px-2 font-bold" role="none">
                
                    <a href="/ar" className="px-6 rounded-md text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
                        <span>العربية</span>
                    </a>

                    <a href="/en" className="px-6 rounded-md text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">
                        <span>English</span>
                    </a>

                    <a href="/tr" className="px-6 rounded-md text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">
                        <span>Türkçe</span>
                    </a>

                    <a href="/fr" className=" px-6 rounded-md text-gray-200 items-center flex flex-row py-2 cursor-pointer hover:bg-gray-900 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">            
                        <span>Français</span>
                    </a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Languages