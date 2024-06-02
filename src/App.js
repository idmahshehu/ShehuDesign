// App.js
import React, { useEffect, useRef } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import WhatIDo from "./components/WhatIDo";
import Testimonials from "./components/Testimonals";
// import Scrollbar from "smooth-scrollbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Import the styles for LocomotiveScroll
import ClientList from "./components/ClientList";
import Earth from "./components/Earth";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {

    },[]);

  // useEffect(() => {
  //   const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'), {
  //     damping: 0.06,
  //     thumbMinSize: 20,
  //     renderByPixels: true,
  //     alwaysShowTracks: true,
  //   });

  //   return () => {
  //     if (scrollbar) {
  //       scrollbar.destroy();
  //     }
  //   };
  // }, []);

  return (
    <>
      {/* <div id="my-scrollbar" style={{ height: '100vh', overflow: 'hidden' }}> */}
      <div id="main-container">
        <Earth/>
        <HomePage />
        <WhatIDo />
        <Testimonials />
        {/* <ClientList/> */}
      </div>

      {/* </div> */}
    </>
  );
}

export default App;
