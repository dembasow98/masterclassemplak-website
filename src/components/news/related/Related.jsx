import React, {lazy, Suspense} from 'react'

import Spinner from '../../common/loader/Spinner.jsx'

import data from '../../../data/properties/data.json'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import a separator
import separator from './../../../assets/images/separators/yellow/yel2.png'

const Property = lazy(()=>import("../../properties/forms/Property.jsx"))

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

    responsive: [
        
        {
            //For the breakpoint of 1200px and above
            breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
    
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]

      
  };


  return (
    <section className="lg:mx-10 flex flex-col justify-center items-center">
        <div className = "w-full bg-real-estate px-10 pt-2 pb-10 rounded-lg justify-center items-center">
            <p className="text-3xl lg:text-4xl font-bold  text-center text-gray-200">
                Find your dream home in Türkiye
            </p>
            <img src = {separator} alt = "separator" className = "w-full mx-auto py-2" />
          <Slider {...settings}>
            {
              properties.map((property) => (
                <Suspense fallback={<Spinner />} >
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
                </Suspense>
              ))
            }
          </Slider>
      </div>
    </section>
  )
}

export default Related