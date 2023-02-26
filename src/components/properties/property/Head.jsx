import React from 'react'
import {HiOutlineShare} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillPrinter} from "react-icons/ai";


const Head = ({title, description, price, reference, createdAt, updatedAt}) => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-between md- md:flex-row w-full py-4 shadow-gray-800 shadow-lg ">
      <div className ="md:w-2/3">
        <div className="flex w-full flex-row md:px-14 lg:px-18 px-4 sm:px-10 xl:px-24 justify-center md:justify-start items-center my-4">
          <p className=" text-center text-lg md:text-xl text-gray-900 dark:text-gray-300">{title} - {description}</p>
        </div>
        <div className="flex w-full flex-row md:px-14 px-4 sm:px-10 lg:px-18 xl:px-24 justify-center  md:justify-start gap-8 sm:gap-10 items-center">
            <div className="flex flex-col justify-start my-4">
              <p className="md:font-bold text-sm text-gray-900 dark:text-gray-100"><span className="text-green-700">Price: </span>{price}</p>
              <p className="md:font-bold text-sm  text-gray-900 dark:text-gray-100"><span className="text-green-700">Reference: </span>{reference}</p>
            </div>
            <div className="flex flex-col justify-start ">
              <p className="text-sm md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-700">Created: </span>{createdAt}</p>
              {
                createdAt !== updatedAt && <p className="text-sm md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-700">Updated: </span>{updatedAt}</p>
              }
            </div>
        </div>
      </div>
      <div className="flex flex-row justify-center px-10 my-2 gap-3 items-center md:px-8 lg:px-14 xl:px-20 w-full md:w-1/3 ">
        <div className="flex p-1 border rounded-md flex-col justify-center items-center w-1/3">
          <AiFillPrinter className="w-8 h-8 cursor-pointer hover:text-red-800 fill-current text-gray-900 dark:text-gray-100"/>
          <p className="text-gray-900 dark:text-gray-100">Print</p>
        </div>
        <div className="flex p-1 border rounded-md flex-col justify-center items-center w-1/3">
          <AiOutlineHeart className="w-8 h-8 cursor-pointer hover:text-red-800 fill-current text-gray-900 dark:text-gray-100"/>
          <p className="text-gray-900 dark:text-gray-100">Favorites</p>
        </div>
        <div className="flex p-1 border rounded-md flex-col justify-center items-center  w-1/3">
          <HiOutlineShare className="w-8 h-8 cursor-pointer hover:text-red-800 fill-current text-gray-900 dark:text-gray-100"/>
          <p className="text-gray-900 dark:text-gray-100">Share</p>
        </div>
      </div>

    </div>
  )
}

export default Head