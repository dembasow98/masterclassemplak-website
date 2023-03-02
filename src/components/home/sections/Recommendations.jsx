import React from 'react'

import Recommendation from './recomendation/Recommendation'

const Recommendations = () => {
  return (
    <section className="w-full my-6 flex  flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Recommendations</h1>
        </div>
        <div className="flex pb-4 justify-center">
            <Recommendation />
            <Recommendation />
            <Recommendation />
            
        </div>
    </section>
  )
}

export default Recommendations