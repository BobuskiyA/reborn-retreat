import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./Video.scss";

export const Video = () => {
  const videoFileName = require("./video/video.mp4");
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVideoClick = () => {
    if (playerRef.current) {
      setPlaying(!playing);
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="video" id="program-suit">
      <div className="video-container" onClick={handleVideoClick}>
        <h1 className="video-title">Does this program suit you?</h1>
        <img src="images/video/video-decor.png" alt="video-decor" />
        <div className="video-wrapper">
          <ReactPlayer
            className="video-content"
            ref={playerRef}
            url={videoFileName}
            playing={playing}
            onPause={handlePause}
            onPlay={handlePlay}
            onEnded={handleVideoEnded}
            width="100%"
            height="100%"
          />
          {!playing && (
            <div className="play-button-container">
              <button className="play-button" onClick={handlePlayPause}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85"
                  height="110"
                  viewBox="0 0 85 110"
                  fill="none"
                >
                  <path
                    d="M0 -0.000244141L85 57.4998L0 110V-0.000244141Z"
                    fill="white"
                    fill-opacity="0.52"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
