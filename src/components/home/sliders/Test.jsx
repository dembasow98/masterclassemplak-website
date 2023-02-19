import React from 'react'
import {Image, Button} from './components'
import bannerData from '../../../data/slides/banner.json'

//Get the images from the json file
const images = bannerData.images
console.log(images)

const Banner = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {images.map((image, index) => (
          <Button 
            key={index} 
            slideId={image.id} 
            isActive={index === 0 ? true : false}
          />
        ))}
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        {images.map((image, index) => (
          <Image 
            key={index} 
            title = {image.title} 
            source = {image.source} 
            description={image.description} 
            tags = {image.tags}  
          />
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner