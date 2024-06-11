import React, { useEffect } from "react";
import cursorPixi from "./cursorPixi";

const Cursor = () => {
  useEffect(() => {
    const initializePixi = () => {
      const container = document.getElementById("pixi");
      if (container) {
        console.log("Initializing Pixi in Cursor component");
        cursorPixi();
      } else {
        console.error("Container with ID 'pixi' not found");
      }
    };

    const timeoutId = setTimeout(initializePixi, 0); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="pixi"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 10000,
      }}
    />
  );
};

export default Cursor;
