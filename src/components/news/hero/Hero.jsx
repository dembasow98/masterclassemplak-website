import React from 'react'

const Hero = ({fullname, title, image, presentation}) => {
  return (
    <div className="wrapper antialiased text-gray-900 mt-10">
        <div className="py-10 md:py-16">
            <div className="flex flex-col px-8 md:px-10 lg:px-12 items-center justify-center shadow-md">
                <img src={image} alt={title} className="w-full md:w-96 md:h-96 lg:w-[550px] lg:h-[500px] object-cover object-center rounded-xl shadow-md"/>
            </div>
            <div className="relative w-full flex  -mt-2 md:-mt-14 lg:-mt-20 items-center justify-center">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg md:mt-12 md:w-[500px]  md:min-h-[300px] lg:w-[700px]  shadow-lg">
                    <div className="flex items-baseline text-md md:text-xl lg:text-2xl">
                        <span className="bg-teal-200 text-teal-800 m-4  px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            {fullname}
                        </span>
                        <div className="ml-2 text-gray-600 dark:text-gray-200 uppercase font-semibold tracking-wider">
                            {title}
                        </div>  
                    </div>
            
                    <div className="mt-1 dark:text-gray-300 ">
                        <span className="text-sm md:text-md lg:text-xl xl:text-2xl">
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