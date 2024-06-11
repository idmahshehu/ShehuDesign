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

  const headings = [
    { id: 0, main: "NOW", text: "Ford"},
    { id: 1, main: "2020", text: "Lincoln"},
    { id: 2, main: "2015", text: "Microsoft"},
    { id: 3, main: "2011", text: "Interactive Labs"},
  ];

  return (
    <>
    <div className="history">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-10 col-12">
          <p className=" container_content body-text text-uppercase">
            HISTORY
          </p>
        </div>
      </div>
    </div>
            {headings.map((heading) => (
          <div
            className={`heading-mask js-heading-mask ${
              hoverIndex === heading.id ? "hover" : ""
            }`}
            key={heading.id}
        >
          <div className="heading-mask_el heading-mask_el__deep container_content">
            <div className="row align-items-center">
              <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                <div className="simple-masking d-flex align-items-center" id="history">
                  <div className="simple-masking_el" id="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" , fontSize:"3rem"}}
                      onMouseEnter={() => handleMouseEnter(heading.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoverIndex === heading.id ? heading.main : heading.main}
                    </h2>
                  </div>
                  <div className="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" , fontSize:"3rem"}}
                      onMouseEnter={() => handleMouseEnter(heading.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoverIndex === heading.id ? heading.text : heading.text}
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
                    <h2 className="h1 mb-0 text-dark" style={{fontSize:"3rem"}}>{heading.main}</h2>
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
