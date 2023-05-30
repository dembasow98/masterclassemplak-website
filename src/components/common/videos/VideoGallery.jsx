import React from 'react';
import YouTube from 'react-youtube';
import videos from './videos.json'; // Import the videos JSON file

const VideoGallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const currentVideo = videos[currentVideoIndex];

  const opts = {
    height: '360',
    width: '640',
  };

  const nextVideo = () => {
    const newIndex = currentVideoIndex + 1;
    if (newIndex < videos.length) {
      setCurrentVideoIndex(newIndex);
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <YouTube videoId={currentVideo.videoId} opts={opts} />
      </div>
      <h2 className="text-center text-2xl font-bold mb-2">{currentVideo.title}</h2>
      <p className="text-center mb-4">{currentVideo.description}</p>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextVideo}
        >
          Next Video
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
