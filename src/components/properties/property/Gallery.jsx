import React from 'react'

import "~react-image-gallery/styles/css/image-gallery.css";


import ImageGallery from 'react-image-gallery';



const Gallery = ({images}) => {
  return (
    <ImageGallery items={images} />
  )
}

export default Gallery