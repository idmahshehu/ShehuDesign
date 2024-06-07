import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const PixiCursor = () => {
  const pixiContainer = useRef(null);
  const app = useRef(null);
  const cursor = useRef(null);

  useEffect(() => {
    // Initialize PixiJS application
    app.current = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });

    // Append PixiJS view (canvas) to the container
    if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.current.view);
      }

    // Create the custom cursor
    cursor.current = new PIXI.Graphics();
    cursor.current.beginFill(0xff0000); // Red color
    cursor.current.drawCircle(0, 0, 10); // Radius of 10px
    cursor.current.endFill();
    app.current.stage.addChild(cursor.current);

    // Update cursor position on mouse move
    const onMouseMove = (event) => {
      cursor.current.x = event.clientX;
      cursor.current.y = event.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Cleanup event listener and PixiJS application on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      app.current.destroy(true, { children: true });
    };
  }, []);

  return <div ref={pixiContainer} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10000 }} />;
};

export default PixiCursor;
