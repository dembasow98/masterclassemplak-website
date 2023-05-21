import React from 'react'
import yel2 from "../../../assets/images/separators/yellow/yel2.png";


const Map = ({title, width, height}) => {
  return (
    <div className="flex flex-col w-full mb-6">
        <div className="rounded-3xl bg-[#043334] my-2" id="side-contact-us">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-3 mb-1 text-center font-bold text-2xl lg:text-3xl text-gray-200">
              {title}
            </div>
            <div className="w-full mb-4 flex justify-center items-center">
                <img src = {yel2} alt = "separator" />
            </div>
          </div>
          <iframe 
            title="map"
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332179421578!2d-122.01154692424552!3d37.334643772099476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2str!4v1682765719923!5m2!1sen!2str"
            width={width} height={height} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            >
          </iframe>
        </div>
    </div>
  )
}

export default Map