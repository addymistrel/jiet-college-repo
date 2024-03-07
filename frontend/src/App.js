import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/AboutUs/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ChairmansMessage from "./pages/AboutUs/ChairmansMessage/ChairmansMessage";
import MissionAndVision from "./pages/AboutUs/MissionAndVision/MissionAndVision";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<MissionAndVision />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
