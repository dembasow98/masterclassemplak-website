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
      {images.map((image) => (
        <Image
          key={image.id}
          title={image.title}
          source={image.source}
          description={image.description}
          tags={image.tags}
        />
      ))}
    </Slider>
  );
};

export default Banner;
