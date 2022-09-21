import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  // **************
  // *** STATES ***
  // **************
  const [playVideo, setPlayVideo] = useState(false);
  const [isShown, setIsShown] = useState(false);

  // **************
  // *** USEREF ***
  // **************
  const vidRef = useRef();

  // *********************
  // *** VIDEoHANDLER ***
  // *********************
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    // ***************
    // *** WRAPPER ***
    // ***************
    <div className="app__video">
      {/* ************* */}
      {/* *** VIDEo *** */}
      {/* ************* */}
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {/* *************** */}
      {/* *** OVERLAY *** */}
      {/* *************** */}
      <div
        className="app__video-overlay flex__center"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {/* ********************** */}
        {/* *** BUTTON OUTLINE *** */}
        {/* ********************** */}
        {isShown && (
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {/* *********************** */}
            {/* *** PLAY/PAUSE ICON *** */}
            {/* *********************** */}
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default Intro;
