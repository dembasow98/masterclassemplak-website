import React from 'react'

const Head = ({title, description, price, reference, createdAt, updatedAt}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full shadow-gray-800 shadow-lg ">
      <div className="flex flex-col justify-center items-center bg-blue-300">
        <span className=" text-gray-900 dark:text-gray-300">{title} - {description}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <p className="md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-900">Price: </span>{price}</p>
            <p className="md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-900">Reference: </span>{reference}</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-900">Created: </span>{createdAt}</p>
            {
              createdAt !== updatedAt && <p className="md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-900">Updated: </span>{updatedAt}</p>
            }
          </div>
      </div>
      
    </div>
  )
}

export default Head