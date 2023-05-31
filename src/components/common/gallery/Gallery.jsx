import React, {lazy, Suspense} from 'react'

import "react-image-gallery/styles/css/image-gallery.css";
import Spinner from '../loader/Spinner.jsx';


const ImageGallery = lazy(() => import('react-image-gallery'));

const Gallery = ({images}) => {

  //TODO: Extract the image link from the google drive link shared link:
  const extractImageGoogleDriveLink = (link) => {
    const startIndex = link.indexOf("/d/") + 3; // Find the starting index of the ID
    const endIndex = link.indexOf("/view"); // Find the ending index of the ID
    const imageId = link.substring(startIndex, endIndex);
    // Form the embed link of the image
    const imageLink = `https://drive.google.com/uc?export=view&id=${imageId}`;
    return imageLink;
  };
  

  //Create a images array with the extracted links
  let extracted_images = [...images].map(image => extractImageGoogleDriveLink(image))


  //Create thumbnails from the images
  extracted_images = extracted_images.map(image => {
    return {
      original: image,
      thumbnail: image,
    }
  })

  
  return (
    <div className="w-full rounded-md mt-6">
      <Suspense fallback={<Spinner/>}>
        <ImageGallery
          items={extracted_images} 
          showPlayButton={false}
          showFullscreenButton={false}
          //showNav={false}
          showBullets={true}
          showThumbnails={true}
          showIndex={true}
          autoPlay={true}
          //Make the slide change every 0.5 second
          slideInterval={100}
          lazyLoad={true}
        />
      </Suspense>
    </div>
  )
}

export default Gallery