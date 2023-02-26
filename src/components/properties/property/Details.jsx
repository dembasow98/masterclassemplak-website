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
      <div className="w-full p-4 border border-gray-700 flex flex-col items-center justify-center bg-gray-800 rounded-md">
        <p className="text-lg font-bold md:text-xl w-full text-center  border-b-2 border-gray-400 md:border-r-2 pb-2 mb-2 text-gray-800 dark:text-gray-300">Overview</p>
        <p className=" text-gray-800 dark:text-gray-300">{overview}</p>
      </div>

      <div className="w-full p-4 flex flex-col items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
        <p className="text-lg font-bold md:text-xl w-full text-center border-b-2 md:border-r-2 pb-2 mb-2 border-gray-400 text-gray-800 dark:text-gray-300">Features</p>
        <div className="w-full flex flex-col ">
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

      <div className="w-full p-4 flex flex-col items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
      <p className="text-lg font-bold md:text-xl w-full text-center  border-b-2 md:border-r-2 pb-2 mb-2 border-gray-400  text-gray-800 dark:text-gray-300">Benefits of Buying this Property</p>
        <p className=" text-gray-800 dark:text-gray-300">{benefits}</p>
      </div>

      <div className="w-full p-4 flex flex-col items-center justify-center border border-gray-700 bg-gray-800 rounded-md">
        <p className="text-lg font-bold md:text-xl w-full text-center  border-b-2 md:border-r-2 pb-2 mb-2 border-gray-400  text-gray-800 dark:text-gray-300">More Details</p>
        <p className=" text-gray-800 dark:text-gray-300">{details}</p>
      </div>
    </section>
  )
}

export default Details