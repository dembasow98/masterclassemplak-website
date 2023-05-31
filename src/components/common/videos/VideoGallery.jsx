import React from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoGallery = ({ videos }) => {

  const opts = {
    height: '360',
    width: '640',
  };

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
