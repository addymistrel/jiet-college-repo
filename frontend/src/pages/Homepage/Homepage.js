import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import MainSlider from "../../components/MainSlider/MainSlider";
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";

function Homepage() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Midsection />
      <TestimonialsSlider />
      <BrandLogoSlider />
      <Footer />
    </>
  );
}

export default Homepage;
