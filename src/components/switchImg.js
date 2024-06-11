import { Application, Assets, Sprite, Rectangle, Container } from "pixi.js";
import photo1 from '../assets/slider1.png';
import photo2 from '../assets/slider2.png';
import photo3 from '../assets/slider3.png';
import photo4 from '../assets/slider4.png';

export default async function switchImg() {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ resizeTo: window, backgroundColor: 0xf0f0f0 });

  const container = document.getElementById("switchimg");
  if (!container) {
    console.error("Container with ID 'pixi' not found");
    return;
  }
  container.innerHTML = "";
  container.appendChild(app.view);

  function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", resize);
  resize();

  const textureURLs = [
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  const textures = await Promise.all(
    textureURLs.map((url) => {
      return Assets.load(url).catch((error) => {
        console.error(`Failed to load texture: ${url}`, error);
        return null;
      });
    })
  );

  const validTextures = textures.filter((texture) => texture !== null);

  if (validTextures.length === 0) {
    console.error("No textures were loaded successfully.");
    return;
  }

  const containerSprite = new Container();
  app.stage.addChild(containerSprite);

  // Create sprites for each texture and add them to the container
  validTextures.forEach(texture => {
      const sprite = new Sprite(texture);
      sprite.anchor.set(0.5);
      sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;
      containerSprite.addChild(sprite);
  });

  // Set margin for the container
//   const marginX = 50; 
//   const marginY = 50; 
//   containerSprite.x = marginX;
//   containerSprite.y = marginY;

  let currentTextureIndex = 0;

  // Function to switch textures
  function switchTexture() {
      currentTextureIndex = (currentTextureIndex + 1) % validTextures.length;
      containerSprite.children.forEach((sprite, index) => {
          sprite.texture = validTextures[currentTextureIndex];
      });
  }

  setInterval(switchTexture, 2000); // Switch image every 2 seconds
}
