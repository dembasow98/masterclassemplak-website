import React from 'react'

const Head = ({title, price, reference, additionDate}) => {
  return (
    <div className="flex w-full shadow-gray-800 flex-col justify-center items-center shadow-md border-b border-gray-100 bg-gray-700 ">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
      <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-gray-900 dark:text-gray-100">{price}</p>
          <p className="font-bold text-gray-900 dark:text-gray-100">{reference}</p>
          <p className="font-bold text-gray-900 dark:text-gray-100">{additionDate}</p>
      </div>
    </div>
  )
}

export default Head