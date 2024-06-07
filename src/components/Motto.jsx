import React from "react";

const Motto = () => {
  return (
    <div className="motto">
      <div className="background">
        <div className="content hidden" id="motto_expand" style={{position:"absolute", zIndex:"2000"}}>
          <p className="animate__animated animate__backInUp">
            Welcome to our art
          </p>
          <h1 className="animate__animated animate__backInUp" id="motto_expand" style={{position:"relative", zIndex:"2000"}}>
            Art Gallery App
          </h1>
          <p className="animate__animated animate__backInUp">
            Welcome to our art gallery. Explore our collection of beautiful
            artworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
