import React from 'react'

const Card = ({logo, itemname, title, content}) => {
  return (
    <div class="max-w-sm p-6 items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center flex-col gap-2 justify-between">
            <img class="w-14 rounded-full text-green-600" src={logo} alt="Logo image" />
            <span class="text-xl md:text-2xl lg:text-3xl font-medium uppercase text-green-400">{itemname}</span>
        </div>
        <div class="mt-4 mb-2 items-center flex flex-col gap-2">
          <span class="text-md sm:text-xl lg:text-2xl xl:text-3xl font-light text-black dark:text-gray-200">{title}</span>
          <p class="mb-3 font-normal text-md sm:text-xl lg:text-2xl xl:text-3xl text-gray-500 dark:text-gray-400">
            {content}
          </p>
        </div>
    </div>

  )
}

export default Card