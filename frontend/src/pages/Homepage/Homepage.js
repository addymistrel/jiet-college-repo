import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";
import Overview from "../AboutUs/Overview/Overview";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* <MainSlider />
      <Midsection />
      <TestimonialsSlider />
      <BrandLogoSlider /> */}
      <Overview/>
      <Footer />
    </>
  );
}

export default Homepage;
