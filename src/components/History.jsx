import React, { useState } from "react";

const History = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredText, setHoveredText] = useState(null);

  const handleMouseEnter = (index,text) => {
    setHoverIndex(index);
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setHoveredText(null);
  };

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <div
          className={`heading-mask js-heading-mask ${
            hoverIndex === index ? "hover" : ""
          }`}
          key={index}
        >
          <div className="heading-mask_el heading-mask_el__deep container_content">
            <div className="row align-items-center">
              <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                <div className="simple-masking d-flex align-items-center" id="history">
                  <div className="simple-masking_el" id="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" , fontSize:"3rem"}}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      3D
                    </h2>
                  </div>
                  <div className="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" , fontSize:"3rem"}}
                      onMouseEnter={() => handleMouseEnter(index, "Design")}
                      onMouseLeave={handleMouseLeave}
                    >
                      {hoverIndex === index ? "Design" : "2D"}
                    </h2>
                  </div>
                  {/* <p className="mb-0 desc">
                    I can produce anything that my 16” laptop can render
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="heading-mask_el heading-mask_el__masking container_content">
            <div className="row align-items-center">
              <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                <div className="simple-masking overflow-hidden">
                  <div className="simple-masking_el">
                    <h2 className="h1 mb-0 text-dark" style={{fontSize:"3rem"}}>3D</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default History;
