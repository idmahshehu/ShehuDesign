import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme_container" id="aboutme" style={{position:"relative", zIndex:"2000"}}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-10 col-12">
          <p className=" container_content body-text text-uppercase">
            ABOUT ME
          </p>
        </div>
      </div>
      <div className="aboutme">
      <strong>
          Step into the world of{" "}
            <strong style={{ color: "#eb5939" }}>Shehu Design, </strong>
             where innovation meets imagination. Join me in crafting your vision into stunning realities.
          </strong>
      </div>
    </div>
  );
};

export default AboutMe;
