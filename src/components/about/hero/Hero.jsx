import React from 'react'

const Hero = ({fullname, title, image, presentation}) => {
  return (
    <div class="wrapper bg-gray-400 antialiased text-gray-900">
        <div>
            <img src={image} alt={title} class="w-full object-cover object-center rounded-lg shadow-md"/>    
            <div class="relative px-4 -mt-16  ">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-baseline">
                        <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            {fullname}
                        </span>
                        <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            {title}
                        </div>  
                    </div>
                
            
                    <div class="mt-1">
                        <span class="text-sm text-gray-600">
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