import React, { useEffect } from "react";
import 'animate.css';

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
        console.log(`circle id: ${circle.id}, xPos: ${xPos}, yPos: ${yPos}`);
      });
    };

    document.addEventListener("scroll", handleScroll);
    console.log("Scroll event listener added.");

    return () => {
      document.removeEventListener("scroll", handleScroll);
      console.log("Scroll event listener removed.");
    };
  }, []);

  return (
    <div className="background">
      <div
        className="circle"
        id="circle1"
        data-start-x="100"
        data-start-y="500"
      ></div>
      <div
        className="circle"
        id="circle2"
        data-start-x="1000"
        data-start-y="500"
      ></div>
      <div
        className="circle"
        id="circle3"
        data-start-x="600"
        data-start-y="600"
      ></div>
      <div className="content hidden">
        <h1 className="animate__animated animate__backInUp">Art Gallery App</h1>
        <p className="animate__animated animate__backInUp">
          Welcome to our art gallery. Explore our collection of beautiful
          artworks.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
