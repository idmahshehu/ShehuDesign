import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { debounce } from "lodash";

const Earth = React.memo(() => {
  const mountRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.2,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Set a solid color background
    scene.background = new THREE.Color("#0d0d0d");

    // Create a sphere geometry and a basic material with an Earth texture
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load(
      "https://unpkg.com/three-globe@2.31.0/example/img/earth-dark.jpg"
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 2.5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      sphere.rotation.y = scrollPosition / 100; // Adjust the divisor to control rotation speed
    }, 10); // Adjust the debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  const headings = [
    { id: 0, main: "Ford", text: "Ford", description: "Crafting high-quality vehicles with innovative design and cutting-edge technology." },
    { id: 1, main: "Lincoln", text: "Lincoln", description: "Crafting luxury vehicles that redefine elegance and sophistication." },
    { id: 2, main: "Microsoft", text: "Microsoft", description: "Developing software solutions that empower individuals and organizations worldwide." },
    { id: 3, main: "Interactive Labs", text: "Interactive L|", description: "Creating interactive experiences that engage and inspire audiences across platforms." },
    { id: 4, main: "Warner Bros.", text: "Warner Bros.", description: "Producing iconic films and entertainment that captivate audiences around the globe." }
  ];

  return (
    <div
      className="background_earth"
      ref={mountRef}
      style={{ width: "100%", height: "80vh" }}
    >
      <div className="content_earth hidden">
      {headings.map((heading) => (
          <div
            className={`heading-mask js-heading-mask ${
              hoverIndex === heading.id ? "hover" : ""
            }`}
            key={heading.id}
            style={{ width: "100%" }}
          >
            <div className="heading-mask_el heading-mask_el__deep container_content">
              <div className="row align-items-center">
                <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                  <div className="simple-masking d-flex align-items-center">
                    <div className="simple-masking_el">
                      <h2
                        className="h1 mb-0 js-heading-mask_heading is-masking"
                        style={{ "--size": "0%" }}
                        onMouseEnter={() => handleMouseEnter(heading.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoverIndex === heading.id ? heading.text : heading.main}
                      </h2>
                    </div>
                    <p className="mb-0 desc">
                    {hoverIndex === heading.id ? heading.description : "I can produce anything that my 16” laptop can render"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-mask_el heading-mask_el__masking container_content">
              <div className="row align-items-center">
                <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                  <div className="simple-masking overflow-hidden">
                    <div className="simple-masking_el">
                      <h2 className="h1 mb-0 text-dark">{heading.text}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Earth;
