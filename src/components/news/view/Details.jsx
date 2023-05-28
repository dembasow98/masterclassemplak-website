import React, {lazy, Suspense} from 'react'
import Spinner from '../../common/loader/Spinner.jsx'
const Gallery = lazy(()=>import("../gallery/Gallery.jsx"))



const Details = ({banner, tags, content1, content2 }) => {

  return (
    <section className="border border-gray-600 w-full flex flex-col items-center p-4 gap-2 justify-center">
      <div className="w-full p-4 border border-gray-700 flex flex-col lg:flex-row  items-center justify-center bg-gray-800 rounded-md">
        <div className="w-full items-center justify-center lg:w-1/3">
          {
            tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full"
              >
                #{tag}
              </span>
            ))
          }
        </div>
        <div className="w-full items-center justify-center lg:w-2/3">
          <img src = {banner} alt="banner" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
          <p className="text-lg font-bold md:text-xl text-center text-gray-800 dark:text-gray-300">
            {content1}
          </p>
      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
        <div className="w-full items-center justify-center">
          <Suspense fallback={<Spinner />} >
            <Gallery />
          </Suspense>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
        <div className="w-full items-center justify-center">
          <p className="text-lg font-bold md:text-xl text-center text-gray-800 dark:text-gray-300">
            {content2}
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default Details