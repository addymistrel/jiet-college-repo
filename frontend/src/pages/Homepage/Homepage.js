import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";
import Unique from "../../components/Unique/unique";
import NewsScroll from "../../components/NewsScroll/newsscroll";
import BranchCards from "../../components/branchCards/branchCards";
import TextVideo from "../../components/TextVideo/TextVideo";
import Gallery from "../../components/gallery/gallery";
import WithSpeechBubbles from "../../components/TestimonialsSlider/TestimonialsSlider";
import PaginationContainer from "../../components/Pagination/Pagination";

function Homepage() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Unique />
      <BranchCards />
      {/* <TextVideo />*/}
      {/* <Midsection />
      <TestimonialsSlider />
      <BrandLogoSlider /> */}
      {/* <NewsScroll /> */}
      <WithSpeechBubbles />
      {/* <PaginationContainer /> */}
      <Footer />
    </>
  );
}

export default Homepage;
