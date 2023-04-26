import React from 'react'

const Banner = ({title, image, description}) => {
  return (
    <div className="w-full h-50vh bg-gray-800 flex justify-center items-center">
      <img src= {image} alt="banner" className="w-full h-48 object-cover opacity-25" />
      <div className="absolute text-center text-white px-4">
       <h1 className='text-2xl py-2 sm:text-3xl md:text-4xl font-bold'>
          {title}
       </h1>
        <p className='text-xl font-mono'>
         {description}
        </p>
      </div>

    </div>
  );
};

export default Banner