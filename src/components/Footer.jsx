import React, { useState } from 'react'

const Footer = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [hoveredText, setHoveredText] = useState(null);
  
    const handleMouseEnter = (index,text) => {
      setHoverIndex(index);
      setHoveredText(text);
    };

    const headings = [
        { id: 0, main: "Dribbble" , text: "design"},
        { id: 1, main: "Youtube", text: "design" },
        { id: 2, main: "LinkedIn", text: "design" },
        { id: 3, main: "Instagram", text: "design" },
        { id: 4, main: "Facebook", text: "design" },
        { id: 5, main: "Behance", text: "design" }
      ];
  
    const handleMouseLeave = () => {
      setHoverIndex(null);
      setHoveredText(null);
    };

  return (
    <div className="footer_content">

    <div id='footer'>
    {headings.map((heading) => (
      <div
      className={`heading-mask js-heading-mask ${
        hoverIndex === heading.id ? "hover" : ""
      }`}
      key={heading.id}
      style={{ border:"none", cursor:"pointer"}}
      >
        <div className="heading-mask_el heading-mask_el__deep container_content">
          <div className="row align-items-center">
            <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
              <div className="simple-masking d-flex align-items-center" style={{height:"2rem", padding:"0"}}>
                <div className="simple-masking_el" style={{fontSize:"2rem"}}>
                  <h2
                    className="h1 mb-0 js-heading-mask_heading is-masking"
                    style={{ "--size": "0%" , fontSize:"2rem"}}
                    onMouseEnter={() => handleMouseEnter(heading.id, heading.text)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hoverIndex === heading.id ? heading.text : heading.main}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heading-mask_el heading-mask_el__masking container_content">
          <div className="row align-items-center">
            <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
              <div className="simple-masking overflow-hidden" style={{height:"2rem"}}>
                <div className="simple-masking_el">
                  <h2 className="h1 mb-0 text-dark" style={{fontSize:"2rem"}}>{heading.text}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    
  </div>
  <div className="contact_info">
        <div className="email">
            <h3>Email</h3>
            <p>idmahshehu2003@gmail.com</p>
        </div>
        <div className="phone">
            <h3>Phone</h3>
            <p>+383 45 851 731</p>
        </div>
    </div>
  </div>
  )
}

export default Footer