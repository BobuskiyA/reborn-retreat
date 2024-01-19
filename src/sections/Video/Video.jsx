import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./Video.scss";

export const Video = () => {
  const videoFileName = "https://youtu.be/WpUubyLKrIQ?si=l8BoZ7jsiWndRdz8";

  return (
    <div className="video" id="program-suit">
      <div className="video-container">
        <h1 className="video-title">Does this program suit you?</h1>
        <img src="images/video/video-decor.png" alt="video-decor" />
        <div className="video-wrapper">
          <ReactPlayer
            className="video-content"
            width="77.64vw"
            height="43.06vw"
            controls
            url={videoFileName}
          />
        </div>
      </div>
    </div>
  );
};
