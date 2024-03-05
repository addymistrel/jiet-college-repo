import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/AboutUs/Overview/Overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
