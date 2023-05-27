import React, {lazy, Suspense} from 'react'

import "react-image-gallery/styles/css/image-gallery.css";
import Spinner from '../loader/Spinner.jsx';


const ImageGallery = lazy(() => import('react-image-gallery'));

const Gallery = ({images}) => {

  //Test images:
  //console.log(images)
  //Create thumbnails from the images
  images = images.map(image => {
    return {
      original: image,
      thumbnail: image,
    }
  })

  
  return (
    <div className="w-full rounded-md mt-6">
      <Suspense fallback={<Spinner/>}>
        <ImageGallery
          items={images} 
          showPlayButton={false}
          showFullscreenButton={false}
          //showNav={false}
          showBullets={true}
          showThumbnails={true}
          showIndex={true}
          autoPlay={true}
          slideDuration={500}
        />
      </Suspense>
    </div>
  )
}

export default Gallery