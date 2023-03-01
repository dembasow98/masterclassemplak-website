import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Image} from './components';

import data from '../../../data/slides/data.json';





const Banner = () => {

  //Get the images from the json file
  const images = data.properties;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots my-10 text-white bg-gray-900 bg-opacity-25",
  };

  return (
    <Slider {...settings}>
      {images.map((property) => (
        <Image
          key = {property?.id}
          type = {property?.type}
          isFavorite = {property?.isFavorite}
          title = {property?.title}
          description = {property?.description}
          source = {property?.source}
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
          tags={property?.tags}
        />
      ))}
    </Slider>
  );
};

export default Banner;
