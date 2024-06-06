// import React, { useEffect } from 'react';
// import Scrollbar from 'smooth-scrollbar';

// const CustomScrollbar = ({ children }) => {
//   useEffect(() => {
//     const container = document.querySelectorAll('#scroll-container');
//     if (!container) return;

//     const scrollbar = Scrollbar.init(container, {
//       damping: 0.06,
//       thumbMinSize: 20,
//       renderByPixels: true,
//       alwaysShowTracks: true,
//     });

//     return () => {
//       if (scrollbar) {
//         scrollbar.destroy();
//       }
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default CustomScrollbar;


// ScrollContext.js
import React, { createContext, useContext, useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector('#scroll-container');
    const scrollbar = Scrollbar.init(container, {
      damping: 0.06,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: true,
    });

    scrollRef.current = scrollbar;

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollRef.current}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollbar = () => useContext(ScrollContext);
