import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({banner, title, description, date} ) => {



  return (
    
    <div class="flex rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border  border-gray-500 bg-gray-800 ">
        <div class="w-full md:w-1/3  grid place-items-center">
            <img src={banner} alt="tailwind logo" class="rounded-sm" />
        </div>
        <div class="w-full md:w-2/3 flex flex-col space-y-2 p-3">
            <h3 class="font-black text-gray-200 sm:text-sm md:text-md lg:text-xl">{title}</h3>
            <p class="md:text-sm lg:text-md text-gray-300 text-base">
                

                {
                    description &&
                    description.length > 100?description.substring(0, 100) + '...':description
                }
            </p>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row justify-end items-center">
                    <p class="text-gray-200 text-xs md:text-sm lg:text-md">{date}</p>
                </div>
                <div class="flex flex-row justify-end items-center">
                <Link to="/news">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read More
                    </button>
                </Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card