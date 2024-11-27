import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";

const MusicCard = ({ data }) => {
  const music_url = process.env.REACT_APP_MUSIC_URL;
  const { song, singer, description, image, album } = data;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');
  const soundRef = useRef(null);
  const song_url = music_url+"/"+song;

  useEffect(() => {

    soundRef.current = new Howl({
      src: [song_url],
      html5: true,
      onload: () => {
        const duration = soundRef.current.duration();
        setTotalDuration(formatTime(duration));
      },
      onend: () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime('0:00');
      },
    });

    return () => {
      // Cleanup Howl instance when component unmounts
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [song]);

  // Format time helper
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  // Handle Play/Pause
  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();

      // Update progress and time
      const interval = setInterval(() => {
        const seek = soundRef.current.seek() || 0;
        setProgress((seek / soundRef.current.duration()) * 100);
        setCurrentTime(formatTime(seek));
      }, 500);

      soundRef.current.on('pause', () => clearInterval(interval));
      soundRef.current.on('stop', () => clearInterval(interval));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col mt-5 mx-auto justify-center gap-4 px-5 items-center">
    <h1>Now Playing</h1>
  
    <img src={image} alt={description} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h2 className="text-md font-semibold">{song.replace(/\.mp3$/, '')}</h2>
      <p className="text-md text-gray-500">{singer}</p>
  

      <div className="flex flex-row items-center gap-4 mt-4 w-[280px]">
        <span className="text-sm text-gray-600">{currentTime}</span>
        <div className="flex-1">
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <span className="text-sm text-gray-600">{totalDuration}</span>
      </div>
  
     <div className="flex flex-row gap-6 mt-3 justify-center items-center mx-auto">
      <button>
        <GiPreviousButton color="white" size={25} />
      </button>
     <button
        onClick={togglePlayPause}
        className="px-3  py-2 bg-gray-800 opacity-70 text-white font-bold rounded shadow-md"
      >
        {isPlaying ? <FaPause color="white"  size={25} /> : <FaPlay color="white" size={25} />}
      </button>
      <button>
        <GiNextButton color="white" size={25} />
      </button>
     </div>
    </div>
  </div>
  
  );
};

export default MusicCard;
