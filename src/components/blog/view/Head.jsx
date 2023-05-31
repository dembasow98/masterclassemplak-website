import React from 'react'
import {HiOutlineShare} from "react-icons/hi";


const Head = ({title, tags, createdAt, updatedAt}) => {
  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full p-4 bg-gray-900 shadow-3xl border-b border-gray-800">
        <section className="flex flex-col gap-y-1 justify-center items-center">
          <div className="flex w-full flex-row md:px-14 lg:px-18 px-4 sm:px-10 xl:px-24 justify-center md:justify-start items-center">
            <p className=" text-center text-lg md:text-xl text-gray-300">{title}</p>
          </div>
          <div className="flex w-full flex-row md:px-14 lg:px-18 sm:px-10 xl:px-24 justify-center md:justify-start items-center my-4">
              {tags.map((tag) => (
                  <span
                  key={tag}
                  className="inline-block px-2 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full"
                  >
                  #{tag}
                  </span>
              ))}
          </div>
        </section>

        <section className = "flex flex-row gap-y-1 justify-between  px-10 sm:px-20 items-center">
          <div className="">
            <p className="text-sm md:font-bold text-gray-300 "><span className="text-[#043334]">Created: </span>{createdAt}</p>
            {
              createdAt !== updatedAt && <p className="text-sm md:font-bold text-gray-300 "><span className="text-[#043334]">Updated: </span>{updatedAt}</p>
            }
          </div>
          <div className="flex  border rounded-md flex-col justify-center items-center px-4">
            <HiOutlineShare className="w-8 h-8 cursor-pointer hover:text-red-800 fill-current text-gray-200 "/>
            <p className="text-gray-200 ">Share</p>
          </div>
        </section>
    </section>
  )
}

export default Head