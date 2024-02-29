import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer"
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import MainSlider from  "../../components/MainSlider/MainSlider"

function Homepage() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <BrandLogoSlider />
    </>
  );
}

export default Homepage;
