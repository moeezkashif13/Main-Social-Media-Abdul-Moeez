import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import 'videojs-youtube';



const  VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        player.log('player is ready');
        onReady && onReady(player);
      });

    // You can update player in the `else` block here, for example:
    } else {
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} playsInline className='video-js vjs-big-play-centered' />
    </div>
  );
}


export const App = () => {
    const playerRef = React.useRef(null);


    const {index}= useSelector(state=>state.helperReducer.showUserStoriesModal);


    const [receivedVideo,setReceivedVideoTEMP] = useState('https://firebasestorage.googleapis.com/v0/b/social-media-e9998.appspot.com/o/6DGBse93KLc457CwVA5easn8J5J3%2FshortVideos%2Fcompressed%20pexels%20video.mp4?alt=media&token=b72323c7-f2e2-4499-868f-6390bc6e1fdb');

// useEffect(()=>{

//   const shortVideosTEMP = JSON.parse(localStorage.getItem('shortVideosTEMP'))[index];

//   setReceivedVideoTEMP(shortVideosTEMP)


// },[])


    const videoJsOptions = {
        autoplay: true,
        controls: true,
    
      responsive: true,

      
      width:'400px',
      height:'600px',

      
      techOrder: ['html5','youtube'],
      sources: [{
        // src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
        // type: 'video/youtube',

// src:'https://cdn.videvo.net/videvo_files/video/premium/video0288/large_watermarked/_DiscoClub1_preview.mp4',

src:receivedVideo,
        type:'video/mp4'

      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        player.log('player is waiting');
      });

  
      player.on('dispose', () => {
        player.log('player will dispose');
      });
    };

  
    
    return (
      <>
      
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      
      </>
    );
  }
  