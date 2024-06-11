import React, { useState } from "react";

function WhatIDo() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoveredText, setHoveredText] = useState(null);
  const [hoveredDescription, setHoveredDescription] = useState("I can produce anything that my 16” laptop can render");

  const handleMouseEnter = (index, text, description) => {
    setHoverIndex(index);
    setHoveredText(text);
    setHoveredDescription(description);
  };

  const headings = [
    { id: 0, main: "3D", text: "3D", description: "Crafting high-quality 3D models with precision and attention to detail." },
    { id: 1, main: "Visual", text: "Visual", description: "Creating stunning visuals that effectively communicate ideas and designs." },
    { id: 2, main: "Dynamic", text: "Dynamic", description: "Producing dynamic animations that bring concepts to life." },
    { id: 3, main: "Production", text: "Production", description: "Efficiently producing content to ensure high-quality outputs." },
    { id: 4, main: "Tutorial", text: "Tutorial", description: "Providing comprehensive training and guides to enhance learning." }
  ];

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setHoveredText(null);
    setHoveredDescription("I can produce anything that my 16” laptop can render");
  };

  return (
    <>
    <div className="history">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-10 col-12">
          <p className=" container_content body-text text-uppercase">
            WHAT I DO
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
                <div className="simple-masking d-flex align-items-center">
                  <div className="simple-masking_el">
                    <h2
                      className="h1 mb-0 js-heading-mask_heading is-masking"
                      style={{ "--size": "0%" }}
                      onMouseEnter={() => handleMouseEnter(heading.id, heading.text, heading.description)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {hoverIndex === heading.id ? heading.text : heading.main}
                    </h2>
                  </div>
                  <p className="mb-0 desc">
                    {hoverIndex === heading.id ? hoveredDescription : "I can produce anything that my 16” laptop can render"}
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
                    <h2 className="h1 mb-0 text-dark">{heading.text}</h2>
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
