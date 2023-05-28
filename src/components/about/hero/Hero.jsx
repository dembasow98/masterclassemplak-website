import React from 'react'

const Hero = ({fullname, title, image, presentation}) => {
  return (
    <div className="wrapper antialiased  text-gray-900 mt-10">
        <div className="py-10 md:py-16">
            <div className="flex flex-col px-8 md:px-10 lg:px-12 items-center justify-center shadow-md">
                <img src={image} alt={title} className="w-full md:w-64 lg:w-[300px] lg:h-[300px] object-cover object-center rounded-xl shadow-md"/>
            </div>
            <div className="relative w-full flex  -mt-2 md:-mt-14 lg:-mt-20 items-center justify-center">
                <div className="bg-gray-900 p-6 rounded-lg md:mt-12 md:w-[500px]  md:min-h-[300px] lg:w-[700px]  shadow-lg">
                    <div className="flex items-center justify-center text-md md:text-lg lg:text-xl">
                        <span className="bg-[#043334] py-4 px-2 text-gray-100 m-4 inline-block rounded-full items-center justify-center  uppercase font-semibold tracking-wide">
                            {fullname}
                        </span>
                        <div className="ml-2 text-gray-600 dark:text-gray-200 uppercase font-semibold tracking-wider">
                            {title}
                        </div>  
                    </div>
            
                    <div className="mt-1 dark:text-gray-300 ">
                        <span className="text-sm md:text-md lg:text-lg">
                            {presentation}
                        </span>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero