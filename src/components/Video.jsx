import React from "react";

const Video = () => {
  return (
    <div className="background" id="video">
      <video autoPlay loop muted playsInline className="video">
        <source
          src={require("../assets/Untitled video - Made with Clipchamp.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content hidden" id="video_content">
        <p className="animate__animated animate__backInUp">Making</p>
        <h1 className=" animate__animated animate__fadeInUp">
          {" "}
          <div className=" animate__animated animate__fadeInUp">Making</div>
          <div className=" animate__animated animate__fadeInUp">
            <span>Good</span>
          </div>
          <div className=" animate__animated animate__fadeInUp">
            <span>Work</span>
          </div>
          <div className=" animate__animated animate__fadeInUp">Since</div>
          <div className=" animate__animated animate__fadeInUp">2010</div>
        </h1>
      </div>
    </div>
  );
};

export default Video;
