import React from 'react'

const Head = ({title, price, reference, additionDate}) => {
  return (
    <div className="flex w-full shadow-md bg-gray-700 shadow-gray-800 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        <div className="flex flex-row justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{price}</h2>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{reference}</h2>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{additionDate}</h2>
        </div>
    </div>
  )
}

export default Head