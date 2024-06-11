import React, { useEffect } from "react";
import "animate.css";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const circles = document.querySelectorAll(".circle");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Define the target position at the center of the screen
      const targetX = windowWidth / 2;
      const targetY = windowHeight / 2;

      circles.forEach((circle) => {
        const startX = parseFloat(circle.getAttribute("data-start-x"));
        const startY = parseFloat(circle.getAttribute("data-start-y"));

        // Calculate the positions interpolated between start and target positions
        const xPos = startX + (targetX - startX) * (scrollY / windowHeight);
        const yPos = startY + (targetY - startY) * (scrollY / windowHeight);

        circle.style.transform = `translate(${xPos - startX}px, ${
          yPos - startY
        }px)`;
        // console.log(`circle id: ${circle.id}, xPos: ${xPos}, yPos: ${yPos}`);
      });
    };

    document.addEventListener("scroll", handleScroll);
    // console.log("Scroll event listener added.");

    return () => {
      document.removeEventListener("scroll", handleScroll);
      // console.log("Scroll event listener removed.");
    };
  }, []);

  return (
    <div className="background" id="work">
      <div
        className="circle"
        id="circle1"
        data-start-x="600"
        data-start-y="500"
      ></div>
      <div
        className="circle"
        id="circle2"
        data-start-x="800"
        data-start-y="450"
      ></div>
      <div
        className="circle"
        id="circle3"
        data-start-x="700"
        data-start-y="450"
      ></div>
      {/* <div className="content hidden">
        <h1 className="animate__animated animate__backInUp">Art Gallery App</h1>
        <p className="animate__animated animate__backInUp">
          Welcome to our art gallery. Explore our collection of beautiful
          artworks.
        </p>
      </div> */}
      <div className="aboutme_container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-10 col-12">
            <p className=" container_content body-text text-uppercase">
            <strong style={{ color: "#eb5939" }}>Shehu Design </strong>
            </p>
          </div>
        </div>
        <div className="aboutme">
          {/* <strong> */}
          Embark on the journey through my diverse portfolio, showcasing years of experience in transforming ideas into captivating visuals.
          {/* </strong> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
