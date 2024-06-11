import React from "react";

const Motto = () => {
  return (
    <div className="motto" id="contact">
      <div className="background">
        <div className="content hidden" id="motto_expand" style={{position:"absolute", zIndex:"2000"}}>
          <p className="animate__animated animate__backInUp">
          <strong style={{ color: "#eb5939" }}>MY MOTTO </strong>
          </p>
          <h1 className="animate__animated animate__backInUp" id="motto_expand" style={{position:"relative", zIndex:"2000"}}>
            GOOD DESIGN IS HONEST
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Motto;
