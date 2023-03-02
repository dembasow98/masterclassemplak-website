import React from 'react'

import data from './../../../data/slides/data.json'
import { Property } from './../../properties/forms'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recommendations = () => {

  const properties = data.properties;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <section className="w-full my-10 flex  flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
            <p className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">Recommendations</p>
        </div>
        <div className = "w-full p-8  justify-center items-center">
          <Slider {...settings}>
            {
              properties.map((property) => (
                  <Property
                      key = {property?.id}
                      type = {property?.type}
                      isFavorite = {property?.isFavorite}
                      title = {property?.title}
                      description = {property?.description}
                      profileImage = {property?.source}
                      gallery = {property?.gallery}
                      location = {property?.location}
                      price = {property?.price}
                      reference = {property?.reference}
                      createdAt = {property?.createdAt}
                      updatedAt = {property?.updatedAt}
                      overview = {property?.overview}
                      benefits = {property?.benefits}
                      details = {property?.details}
                      features = {property?.features}
                  />
              ))
            }
          </Slider>
      </div>
    </section>
  )
}

export default Recommendations