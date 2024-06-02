import React, { useEffect } from "react";

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
        data-start-x="400"
        data-start-y="300"
      ></div>
      <div
        className="circle"
        id="circle2"
        data-start-x="600"
        data-start-y="500"
      ></div>
      <div
        className="circle"
        id="circle3"
        data-start-x="800"
        data-start-y="700"
      ></div>
      <div className="content">
        <h1>Art Gallery App</h1>
        <p>
          Welcome to our art gallery. Explore our collection of beautiful
          artworks.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
