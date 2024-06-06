// Sidebar.js
import React, { useRef, useState } from "react";
import {
  DribbbleIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "./SocialIcons";
import audioSrc from '../assets/sound.mp3';
import 'animate.css';


const Sidebar = () => {
  const [positions, setPositions] = useState({
    dribbble: { x: 0, y: 0 },
    instagram: { x: 0, y: 0 },
    youtube: { x: 0, y: 0 },
    linkedin: { x: 0, y: 0 },
  });

  const handleMouseMove = (e, id) => {
    const iconRect = e.target.getBoundingClientRect();
    const offsetX = (e.clientX - (iconRect.left + iconRect.width / 2)) / 10; // Adjusting for smoother movement
    const offsetY = (e.clientY - (iconRect.top + iconRect.height / 2)) / 10;
    setPositions((prev) => ({ ...prev, [id]: { x: offsetX, y: offsetY } }));
  };

  const handleMouseLeave = (id) => {
    setPositions((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const [isSoundOn, setIsSoundOn] = useState(true);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (isSoundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="logo">Logo</div>
        <div className="contact">
          <div
            className="icon"
            onMouseMove={(e) => handleMouseMove(e, "dribbble")}
            onMouseLeave={() => handleMouseLeave("dribbble")}
            style={{
              transform: `translate(${positions.dribbble?.x}px, ${positions.dribbble?.y}px)`,
            }}
          >
            <a href="https://dribbble.com/phamduyminh">
              <DribbbleIcon />
            </a>
          </div>
          <div
            className="icon"
            onMouseMove={(e) => handleMouseMove(e, "instagram")}
            onMouseLeave={() => handleMouseLeave("instagram")}
            style={{
              transform: `translate(${positions.instagram?.x}px, ${positions.instagram?.y}px)`,
            }}
          >
            <a href="https://www.instagram.com/minhpham.design">
              <InstagramIcon />
            </a>
          </div>
          <div
            className="icon"
            onMouseMove={(e) => handleMouseMove(e, "youtube")}
            onMouseLeave={() => handleMouseLeave("youtube")}
            style={{
              transform: `translate(${positions.youtube?.x}px, ${positions.youtube?.y}px)`,
            }}
          >
            <a href="https://www.youtube.com/@MinhPhamDesign">
              <YouTubeIcon />
            </a>
          </div>
          <div
            className="icon"
            onMouseMove={(e) => handleMouseMove(e, "linkedin")}
            onMouseLeave={() => handleMouseLeave("linkedin")}
            style={{
              transform: `translate(${positions.linkedin?.x}px, ${positions.linkedin?.y}px)`,
            }}
          >
            <a href="https://www.linkedin.com/in/minh-pham-9b67ba52/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="info">
          <div>About</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
        <div className="audio">
        <audio ref={audioRef} autoPlay loop playsInline style={{ display: 'none' }}>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <button
          className="footer_sound text-uppercase btn-clear"
          onClick={toggleSound}
        >
          <span className="footer_sound_label">Sound</span>
          <span className="footer_sound_list">
            {/* <span className="footer_sound_list_item js-footer_sound_list_item__on"
              style={{ transform: isSoundOn ? 'translate(0px, -100%)' : 'translate(0px, 0%)'}}>
              Off
            </span>
            <span className="footer_sound_list_item js-footer_sound_list_item__off"
              style={{ transform: isSoundOn ? 'translate(0px, 0%)' : 'translate(0px, 100%)' }}>
              On
            </span> */}
            {isSoundOn ? (
              <span className="footer_sound_list_item animate__animated animate__fadeInUp">On</span>
            ) : (
              <span className="footer_sound_list_item animate__animated animate__fadeIn">Off</span>
            )}
          </span>
        </button>
      </div>
      </div>


    </div>
  );
};

export default Sidebar;
