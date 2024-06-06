// App.js
import React, { useState } from "react";

function WhatIDo() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <>
      {[...Array(2)].map((_, index) => (
        <div
          className={`heading-mask js-heading-mask ${
            hoverIndex === index ? "hover" : ""
          }`}
          key={index}
        >
          <div className="heading-mask_el heading-mask_el__deep container_content">
            <div className="row align-items-center">
              <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                <div className="simple-masking d-flex align-items-center">
                  <div className="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      3D
                    </h2>
                  </div>
                  <p className="mb-0 desc">
                    I can produce anything that my 16” laptop can render
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-mask_el heading-mask_el__masking container_content">
            <div className="row align-items-center">
              <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                <div className="simple-masking overflow-hidden">
                  <div className="simple-masking_el">
                    <h2 className="h1 mb-0 text-dark">3D</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default WhatIDo;
