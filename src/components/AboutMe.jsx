import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme_container" id="aboutme" style={{position:"relative", zIndex:"2000"}}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-10 col-12">
          <p className=" container_content body-text text-uppercase">
            WHAT THEY SAID
          </p>
        </div>
      </div>
      <div className="aboutme">
        <strong>
          Lorem ipsum dolor <strong style={{color:"#eb5939"}}>sit amet consectetur </strong>adipisicing elit. Aperiam
          tempora molestias aspernatur sed blanditiis 
          
        </strong>
      </div>
    </div>
  );
};

export default AboutMe;