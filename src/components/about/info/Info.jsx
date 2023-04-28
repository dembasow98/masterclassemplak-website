import React from 'react'

import Hero from '../hero/Hero'

const Info = ({title, banner, overview, details}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-4 md:my-6 lg:my-10 xl:my-14 px-4 md:px-10 lg:px-20 dark:bg-gray-900">
        <div className="flex  flex-col bg-white md:px-10 dark:bg-gray-800 px-6 pt-4 pb-2 mb-6 rounded-md shadow-md consultancy-shadow-inset">
            <div className = "w-full flex justify-center pt-2 items-center">
                <span className="w-full m-4 text-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200">
                    {title}
                </span>
            </div>
            <div className="flex pb-4 justify-center">
                <div className="h-1 w-[80%] bg-green-600 rounded-full mt-2 mb-2"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className = "flex justify-center items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl xl:text-2xl text-justify">
                        {overview}
                    </p>
                </div>
                <div className = "flex w-full justify-center items-center my-6  md:p-10">
                    <img src = {banner} alt = "banner" className = "w-full h-full  rounded-xl "/>
                </div>
            </div>
        </div>

        <div className="w-full flex flex-col px-6 pt-4 pb-2 mb-6 rounded-lg shadow-md">
            {
                details.map((detail, index) => {
                    return (
                        <Hero 
                            key={index} 
                            fullname={detail.fullName}
                            title={detail.title}
                            image ={detail.image}
                            presentation={detail.presentation}
                        />
                    )
                })
            }
        </div>

    </section>

  )
}

export default Info