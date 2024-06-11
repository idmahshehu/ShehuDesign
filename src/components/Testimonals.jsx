import React, { useState, useEffect, useRef } from "react";
import photo1 from '../assets/michael-glass.jpg';
import photo2 from '../assets/peter-smart.jpg';
import photo3 from '../assets/linh-le.jpg';
function Testimonials() {
  const testimonialsRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndex = parseInt(entry.target.dataset.index, 10);
            setIndex(newIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    const testimonialElements =
      testimonialsRef.current.querySelectorAll(".js-testimonial");
    testimonialElements.forEach((element, idx) => {
      element.dataset.index = idx;
      observer.observe(element);
    });

    return () => {
      testimonialElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      ref={testimonialsRef}
      className="testimonials js-testimonials"
      style={{ "--index": index, height: "100%", paddingBottom:"70px" }}
    >
      <div className="row justify-content-center" data-scroll>
        <div className="col-lg-8 col-sm-10 col-12">
          <p className="testimonials_content_label container_content body-text text-uppercase">
            WHAT THEY SAID
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-sm-10 col-12">
          <div className="testimonial-content-container">
            <div className="testimonial-thumbs" data-scroll>
              <div className="testimonials_thumbs" data-scroll>
                <div className="js-testimonials_thumbs_list testimonials_thumbs_list">
                  <div className="testimonials_thumbs_inner">
                    <ul className="testimonials_thumbs_list_list ul__reset">
                      <li
                        className={`thumb-item ${
                          index === 0 ? "is-active" : ""
                        }`}
                        onClick={() => setIndex(0)}
                      >
                        <span className="thumb-item_inner">
                          <img
                            src={photo1}
                            alt="Michael Glass"
                          />
                        </span>
                      </li>
                      <li
                        className={`thumb-item ${
                          index === 1 ? "is-active" : ""
                        }`}
                        onClick={() => setIndex(1)}
                      >
                        <span className="thumb-item_inner">
                          <img
                            src={photo2}
                            alt="Peter Smart"
                          />
                        </span>
                      </li>
                      <li
                        className={`thumb-item ${
                          index === 2 ? "is-active" : ""
                        }`}
                        onClick={() => setIndex(2)}
                      >
                        <span className="thumb-item_inner">
                          <img
                            src={photo3}
                            alt="Linh Le"
                          />
                        </span>
                      </li>
                    </ul>
                    <span className="testimonials_thumbs_flash js-testimonials_thumbs_flash"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-content">
              <div
                className={`testimonial js-testimonial ${
                  index === 0 ? "is-active" : ""
                }`}
              >
                <div className="testimonial_inner container_content js-cursor-extend">
                  <div className="testimonial_content h2 scroll-paragraph-parent">
                    <span className="quote-mark">“</span>
                    <span className="scroll-paragraph-mask js-scroll-paragraph-mask is-masking">
                    Shehu Design consistently delivers outstanding results with a positive attitude.
                    </span>
                  </div>
                  <div className="testimonial_info">
                    <p className="testimonial_info_position sub-content">
                    Sarah Johnson
                    </p>
                    <p className="testimonial_info_position sub-content">
                    Creative Director
                    </p>
                    <p className="testimonial_info_company sub-content">
                    Blue Sky Innovations
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`testimonial js-testimonial ${
                  index === 1 ? "is-active" : ""
                }`}
              >
                <div className="testimonial_inner container_content js-cursor-extend">
                  <div className="testimonial_content h2 scroll-paragraph-parent">
                    <span className="quote-mark">“</span>
                    <span className="mb-0 scroll-paragraph-mask js-scroll-paragraph-mask is-masking">
                    The work produced is always top-notch. Truly impressive!
                    </span>
                  </div>
                  <div className="testimonial_info">
                    <p className="testimonial_info_position sub-content">
                    Alex Brown
                    </p>
                    <p className="testimonial_info_position sub-content">
                    Head of Marketing
                    </p>
                    <p className="testimonial_info_company sub-content">
                    Vivid Creations
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`testimonial js-testimonial ${
                  index === 2 ? "is-active" : ""
                }`}
              >
                <div className="testimonial_inner container_content js-cursor-extend">
                  <div className="testimonial_content h2 scroll-paragraph-parent">
                    <span className="quote-mark">“</span>
                    <span className="mb-0 scroll-paragraph-mask js-scroll-paragraph-mask is-masking">
                    Shehu's skills are exceptional and always exceed expectations.
                    </span>
                  </div>
                  <div className="testimonial_info">
                    <p className="testimonial_info_position sub-content">
                    Emily Davis
                    </p>
                    <p className="testimonial_info_position sub-content">
                      Project Manager
                    </p>
                    <p className="testimonial_info_company sub-content">
                    Creative Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
