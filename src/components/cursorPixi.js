import { Application, Graphics, Text, TextStyle } from "pixi.js";

export default async function cursorPixi() {
  console.log("Initializing PixiJS cursor");

  const app = new Application();

  // Initialize the application
  await app.init({ resizeTo: window, backgroundAlpha: 0 }); 

  const container = document.getElementById("pixi");
  if (!container) {
    console.error("Container with ID 'pixi' not found");
    return;
  }
  container.innerHTML = "";
  container.appendChild(app.view);

  // Red circle cursor
  const cursor = new Graphics();
  cursor.beginFill("#eb5939");
  cursor.drawCircle(0, 0, 10);
  cursor.endFill();
  cursor.alpha = 1; // transparent
  app.stage.addChild(cursor);

  let cursorRadius = 10;
  const targetCursorRadius = { value: cursorRadius };

  console.log("Red circle cursor created");

  // Position for the cursor
  let targetX = 0;
  let targetY = 0;

  document.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  // Cursor position smoothly
  app.ticker.add(() => {
    cursor.x += (targetX - cursor.x) * 0.3;
    cursor.y += (targetY - cursor.y) * 0.3;

    cursorRadius += (targetCursorRadius.value - cursorRadius) * 0.2;
    cursor.clear();
    cursor.beginFill(0xeb5939);
    cursor.lineStyle(1);
    cursor.drawCircle(0, 0, cursorRadius);
    cursor.endFill();
  });

  window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
  });

  app.renderer.resize(window.innerWidth, window.innerHeight);

  // motto
  const mottoElement = document.getElementById("motto_expand");
  const aboutMeElement = document.getElementById("aboutme");
  if (mottoElement) {
    mottoElement.addEventListener("mouseover", () => {
      targetCursorRadius.value = 250; // the radius
      cursor.alpha = 0.9;
      container.style.zIndex = "5";
      app.renderer.backgroundAlpha = 1;
      app.renderer.backgroundColor = 0xff0000;
      mottoElement.style.color = "black";
    });

    mottoElement.addEventListener("mouseout", () => {
      targetCursorRadius.value = 10; 
      cursor.alpha = 1;
      container.style.zIndex = "100";
      app.renderer.backgroundAlpha = 0;
      mottoElement.style.color = "white";
    });
  }
  if (aboutMeElement) {
    aboutMeElement.addEventListener("mouseover", () => {
      targetCursorRadius.value = 250; // the radius
      cursor.alpha = 0.9;
      container.style.zIndex = "5";
      app.renderer.backgroundAlpha = 1;
      app.renderer.backgroundColor = 0xff0000; 
      aboutMeElement.style.color = "white";
    });
  
    aboutMeElement.addEventListener("mouseout", () => {
      targetCursorRadius.value = 10; 
      cursor.alpha = 1; 
      container.style.zIndex = "10"; 
      app.renderer.backgroundAlpha = 0; 
      app.renderer.backgroundColor = 0x000000; 
      aboutMeElement.style.color = "";
    });
}
}