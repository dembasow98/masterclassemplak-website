import React from 'react'

import data from './../../../data/slides/data.json'
import { Property } from './../../properties/forms'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import a separator
import separator from './../../../assets/images/separators/yellow/yel2.png'
const Related = () => {

  //Test if the data is being fetched
  console.log(data);

  const properties = data.properties;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  return (
    <section className="w-full flex flex-col justify-center items-center">
        <div className = "w-full bg-real-estate px-6 py-2 justify-center items-center">
            <p className="text-3xl lg:text-4xl font-bold text-gray-800 text-center dark:text-gray-100">
                Find your dream home in Türkiye
            </p>
            <img src = {separator} alt = "separator" className = "w-full mx-auto py-2" />
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

export default Related