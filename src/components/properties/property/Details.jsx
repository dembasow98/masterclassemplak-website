import React from 'react'

import {IoBedOutline} from "react-icons/io5";
import {BiBath} from "react-icons/bi";
import {FaToilet} from "react-icons/fa";
import {GiModernCity} from "react-icons/gi";
import {MdOutlinePool} from "react-icons/md";
import {BsTextarea} from "react-icons/bs";
import {RiParkingBoxLine} from "react-icons/ri";
import {MdRealEstateAgent} from "react-icons/md";
import {SiProtodotio} from "react-icons/si";
//import {MdPriceChange} from "react-icons/md";

//Above the features parameter is an array of objects
//So it will be represented as: fe
const Details = ({overview, features, benefits, details}) => {

  //console.log('features:', features);

  return (
    <section className="w-full flex flex-col items-center p-4 gap-2 justify-center">
      <div className="w-full p-4 border border-gray-800 flex flex-col lg:flex-row  items-center justify-center bg-gray-900 rounded-md">
        
        <div className="w-full items-center justify-center lg:w-1/4">
          <p className="text-lg font-bold md:text-xl text-center text-gray-300">Overview</p>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-3/4 lg:h-full border-t-2 border-gray-400 mt-2 pt-2 lg:pl-4 lg:pt-0 lg:border-t-0 lg:border-l-2 ">
          <p className=" text-gray-300">{overview}</p>
        </div>

      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-800 bg-gray-900 rounded-md">
        <div className="w-full items-center justify-center lg:w-1/4">
          <p className="text-lg font-bold md:text-xl text-center text-gray-300">Features</p>
        </div>
        <div className="w-full flex flex-col lg:w-3/4 lg:h-full border-t-2 border-gray-400 mt-2 pt-2 lg:pl-2 lg:pt-0 lg:border-t-0 lg:border-l-2">
          {
            Array.isArray(features) && features.map((feature, index) => (
              <div key={index} className="flex items-center mr-4 my-1">
                  <div className="flex items-center justify-center mx-2 text-green-600">
                    {feature.name === "Bedrooms" && <IoBedOutline />}
                    {feature.name === "Bathrooms" && <BiBath />}
                    {feature.name === "Toilets" && <FaToilet />}
                    {feature.name === "Parking" && <RiParkingBoxLine />}
                    {feature.name === "Pool" && <MdOutlinePool />}
                    {feature.name === "City" && <GiModernCity />}
                    {feature.name === "Garden" && <BsTextarea/>}
                    {feature.name === "Area" && <MdRealEstateAgent />}
                    {feature.name === "Other" && <SiProtodotio />}
                  </div>
                  <span className="text-gray-400 font-bold mr-2">{feature.name}: </span>
                  <span className="text-gray-500">{feature.value}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-800 bg-gray-900 rounded-md">
        <div className="w-full items-center justify-center lg:w-1/4">
          <p className="text-lg font-bold md:text-xl text-center text-gray-300">Benefits of Buying this Property</p>
        </div>
        <div className="w-full flex flex-col lg:w-3/4 lg:h-full border-t-2 border-gray-400 mt-2 pt-2 lg:pl-4 lg:pt-0 lg:border-t-0 lg:border-l-2">
          <p className="text-gray-300">{benefits}</p>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col lg:flex-row items-center justify-center border border-gray-800 bg-gray-900 rounded-md">
        <div className="w-full items-center justify-center lg:w-1/4">
          <p className="text-lg font-bold md:text-xl text-center text-gray-300">More Details</p>
        </div>
        <div className="w-full flex flex-col lg:w-3/4 lg:h-full border-t-2 border-gray-400 mt-2 pt-2 lg:pl-4 lg:pt-0 lg:border-t-0 lg:border-l-2">
          <p className=" text-gray-300">{details}</p>
        </div>
      </div>
      
    </section>
  )
}

export default Details