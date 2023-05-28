import React from 'react';
import Testimonial from './testimonal/Testimonial';
import data from '../../../data/testimonials/data.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Testimonials = ({description}) => {

    const testimonials = data.testimonials;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <section className="w-full px-6 py-10 md:px-20 lg:px-36 xl:px-42 flex flex-col justify-center items-center">   
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Testimonials</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
        </div>
        <div className="flex w-full flex-col  justify-center">
          <Slider {...settings}>
            {
              testimonials.map((testimonial, index) => {
                return <Testimonial 
                  key={index} 
                  fullName={testimonial.fullName}
                  profilePicture={testimonial.profilePicture}
                  content={testimonial.content}
                  countryCode={testimonial.countryCode}
                  countryName={testimonial.countryName}
                />
              })
            }
          </Slider>
        </div>
      </section>
    )
  }
  
  export default Testimonials;
  