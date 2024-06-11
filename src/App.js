// App.js
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import WhatIDo from "./components/WhatIDo";
import Testimonials from "./components/Testimonals";
// import Scrollbar from "smooth-scrollbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Import the styles for LocomotiveScroll
import Earth from "./components/Earth";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import AboutMe from "./components/AboutMe";
import History from "./components/History";
import Clients from "./components/Clients";
import Motto from "./components/Motto";
import Cursor from "./components/cursor";
import Footer from "./components/Footer";
import SwitchImg from './components/SwitchImg.jsx';

function App() {
  return (
    <>
      <div id="main-container">
        <Cursor />
        <Sidebar />
        <Video />
        <AboutMe />
        <WhatIDo />
        <HomePage />
        <SwitchImg />
        <History />
        <Clients />
        <Earth />
        <Testimonials />
        <Motto />
        <Footer />
      </div>
    </>
  );
}

export default App;
