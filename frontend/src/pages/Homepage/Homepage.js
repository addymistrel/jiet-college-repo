import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import MainSlider from "../../components/MainSlider/MainSlider";

function Homepage() {
  return (
    <>
      <Navbar />
      <MainSlider/>
      <Footer />
    </>
  );
}

export default Homepage;
