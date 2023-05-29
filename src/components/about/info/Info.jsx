import React from 'react'

import Hero from '../hero/Hero'

const Info = ({title, banner, overview1, overview2, details}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-black">
        <div className="flex  flex-col md:px-10 bg-gray-900 px-6 pt-4 pb-2 m-4 md:mx-10 lg:mx-20 xl:mx-24 lg:mt-6 rounded-md shadow-md consultancy-shadow-inset">
            <div className = "w-full flex justify-center pt-2 items-center">
                <span className="w-full m-4 text-center text-2xl md:text-3xl font-bold text-gray-200">
                    {title}
                </span>
            </div>
            <div className="flex pb-4 justify-center">
                <div className="h-1 w-[80%] bg-green-600 rounded-full mt-2 mb-2"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className = "flex justify-center items-center">
                    <p className=" text-gray-400 text-lg lg:text-xl  text-justify">
                        {overview1}
                    </p>
                </div>
                <div className = "flex w-full justify-center items-center my-6 lg:p-20 md:p-10">
                    <img src = {banner} alt = "banner" className = "w-full h-full  rounded-xl "/>
                </div>
                <div className = "flex justify-center items-center">
                    <p className="text-gray-400 text-md md:text-lg lg:text-xl  text-justify">
                        {overview2}
                    </p>
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