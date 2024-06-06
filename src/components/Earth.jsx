// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// const Earth = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       50,
//       mount.clientWidth / mount.clientHeight,
//       0.2,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(mount.clientWidth, mount.clientHeight);
//     mount.appendChild(renderer.domElement);

//     // Create a sphere geometry and a basic material with an Earth texture
//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const texture = new THREE.TextureLoader().load(
//       "https://unpkg.com/three-globe@2.31.0/example/img/earth-dark.jpg"
//     );
//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     camera.position.z = 2.5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       sphere.rotation.y = scrollPosition / 100; // Adjust the divisor to control rotation speed
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       mount.removeChild(renderer.domElement);
//     };
//   }, []);

//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   return <div className="background_earth" ref={mountRef} style={{ width: "100%", height: "80vh" }} >
//           <div className="content_earth hidden">
//           {[...Array(2)].map((_, index) => (
//         <div
//           className={`heading-mask js-heading-mask ${hoverIndex === index ? 'hover' : ''}`}
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//           style={{ width: "100%"}}
//         >
//           <div className="heading-mask_el heading-mask_el__deep container_content">
//             <div className="row align-items-center">
//               <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
//                 <div className="simple-masking d-flex align-items-center">
//                   <div className="simple-masking_el">
//                     <h2 className="h1 mb-0 js-heading-mask_heading is-masking" style={{ "--size": "0%" }}>3D</h2>
//                   </div>
//                   <p className="mb-0 desc">I can produce anything that my 16” laptop can render</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="heading-mask_el heading-mask_el__masking container_content">
//             <div className="row align-items-center">
//               <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
//                 <div className="simple-masking overflow-hidden">
//                   <div className="simple-masking_el">
//                     <h2 className="h1 mb-0 text-dark">3D</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       </div>
//   </div>;
// };

// export default Earth;

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

  return (
    <div className="background_earth" ref={mountRef} style={{ width: "100%", height: "80vh" }}>
      <div className="content_earth hidden">
        {[...Array(2)].map((_, index) => (
          <div
            className={`heading-mask js-heading-mask ${hoverIndex === index ? 'hover' : ''}`}
            key={index}
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
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        3D
                      </h2>
                    </div>
                    <p className="mb-0 desc">I can produce anything that my 16” laptop can render</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-mask_el heading-mask_el__masking container_content">
              <div className="row align-items-center">
                <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
                  <div className="simple-masking overflow-hidden">
                    <div className="simple-masking_el">
                      <h2 className="h1 mb-0 text-dark">3D</h2>
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
