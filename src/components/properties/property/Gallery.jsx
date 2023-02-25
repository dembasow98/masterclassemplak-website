import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css";


import ImageGallery from 'react-image-gallery';



const Gallery = ({images}) => {

  //Create thumbnails from the images
  images = images.map(image => {
    return {
      original: image,
      thumbnail: image,
    }
  })

  return (
    <div className="w-full mt-10">
      <ImageGallery 
        items={images} 
        showPlayButton={false}
        showFullscreenButton={false}
        //showNav={false}
        showBullets={true}
        showThumbnails={true}
      />
    </div>
  )
}

export default Gallery