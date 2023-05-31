import React from 'react';
import YouTube from 'react-youtube';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const VideoGallery = ({ videos }) => {


  const opts = {
    height: '360',
    width: '640',
  };

  if (!videos) {
    return <div className='text-red-600'>No videos available.</div>;
  }

  return (
    <Carousel>
      {videos.map((video, index) => (
        <div key={index}>
          <YouTube videoId={video.videoId} opts={opts} />
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      ))}
    </Carousel>
  );
};


export default VideoGallery;
