import React, { useEffect } from "react";
import switchImg from "./switchImg";

const SwitchImg = () => {
  useEffect(() => {
    const initializePixi = () => {
      const container = document.getElementById("switchimg");
      if (container) {
        console.log("Initializing Pixi in switchimg component");
        switchImg();
      } else {
        console.error("Container with ID 'switchimg' not found");
      }
    };

    const timeoutId = setTimeout(initializePixi, 0);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      id="switchimg"
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        position: "relative",
      }}
    />
  );
};

export default SwitchImg;
