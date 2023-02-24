import React from 'react'

const Details = ({description, overview, features, benefits, details}) => {
  return (
    <div className="flex flex-col w-full border-1 border-gray-400 bg-gray-700 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{description}</h1>
        <div className="flex flex-row justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{overview}</h2>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{features}</h2>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{benefits}</h2>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{details}</h2>
        </div>
    </div>
  )
}

export default Details