import React, { useEffect } from 'react';
import Earth from './Earth';

const ClientList3D = () => {
  useEffect(() => {
    const handleScroll = () => {
      const earthImage = document.querySelector('.moving-earth');
      if (earthImage) {
        const scrollPosition = window.scrollY;
        const rotation = scrollPosition / 5; // Adjust this value to control the speed of rotation
        earthImage.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="client_list_3d">
      <div className="client_list_3d_inner"></div>
      {/* <div className="client_list_3d_image">
            <img
              src="https://minhpham.design/assets/images/planet-1-1.png" // Replace with your PNG image URL
              alt="moving earth"
              className="moving-earth"
            />
          </div> */}
      <Earth />
    </div>
  );
};

export default ClientList3D;
