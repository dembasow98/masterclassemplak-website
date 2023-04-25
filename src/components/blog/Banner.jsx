import React from 'react'
import banner1 from '../../assets/images/banner/banner3.png'

const Banner = () => {
  return (
    <div className="w-full h-50vh bg-gray-800 flex justify-center items-center">
      <img src= {banner1} alt="banner" className="w-full h-48 object-cover opacity-40" />
      <div className="absolute text-center text-white">
       <h1 className='text-4xl font-bold'>
          MASTER CLASS PROPERTY BLOG
       </h1>
        <p className='text-xl font-mono'>
          Read some super important articles on property investment here in Türkiye.
        </p>
      </div>

    </div>
  );
};

export default Banner