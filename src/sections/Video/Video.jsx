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
            width="100%"
            height="100%"
            controls
            url={videoFileName}
          />
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WpUubyLKrIQ?si=WNj3BxwijOwxGPQJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
      </div>
    </div>
  );
};
