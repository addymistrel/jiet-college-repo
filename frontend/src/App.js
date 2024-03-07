import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/AboutUs/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/error";
import MissionAndVision from "./pages/AboutUs/MissionAndVision/MissionAndVision";
import ChairmansMessage from "./pages/AboutUs/ChairmansMessage/ChairmansMessage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus/overview" element={<Overview />} />
        <Route path="/aboutus/cmessage" element={<ChairmansMessage />} />
        <Route path="/aboutus/mission" element={<MissionAndVision />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
