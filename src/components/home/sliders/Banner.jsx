import React, {lazy, Suspense} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from '../../../data/properties/data.json';
import { Spinner } from '../../common';

//Get the images from the json file
const images = data.properties;

const Image = lazy(() => import('./components/Image.jsx'));

const Banner = () => {

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false

  };

   //TODO: Extract the image link from the google drive link shared link:
   const extractImageGoogleDriveLink = (link) => {
      const startIndex = link.indexOf("/d/") + 3; // Find the starting index of the ID
      const endIndex = link.indexOf("/view"); // Find the ending index of the ID
      const imageId = link.substring(startIndex, endIndex);
      // Form the embed link of the image
      const imageLink = `https://drive.google.com/uc?export=view&id=${imageId}`;
      return imageLink;
    };

 
  return (
    <div className="w-full pb-6 bg-[#043334] rounded-b-3xl">
      <Slider {...settings}>
        
          {images.map((property) => (
            <Suspense fallback={<Spinner/>}>
              <Image
                key = {property?.id}
                type = {property?.type}
                isFavorite = {property?.isFavorite}
                title = {property?.title}
                description = {property?.description}
                source = {extractImageGoogleDriveLink(property?.source)}
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
           </Suspense>
        ))}
      </Slider>
      
    </div>
  );
};

export default Banner;
