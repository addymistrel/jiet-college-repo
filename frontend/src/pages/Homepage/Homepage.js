import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";
import Unique from "../../components/Unique/unique";
import NewsScroll from "../../components/NewsScroller/NewsScroller";
import BranchCards from "../../components/branchCards/branchCards";
import TextVideo from "../../components/TextVideo/TextVideo";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import WithSpeechBubbles from "../../components/TestimonialsSlider/TestimonialsSlider";
import PaginationContainer from "../../components/Pagination/Pagination";
import HomeGallery from "../../components/HomeGallery/HomeGallery";

function Homepage() {
  return (
    <>
      <MainSlider />
      <Unique />
      <BranchCards />
      <TextVideo />
      {/* <TextVideo />
      <Gallery /> */}
      {/* <Midsection />
      <TestimonialsSlider />
      <BrandLogoSlider /> */}
      <NewsScroll />
      <WithSpeechBubbles />
      {/* <PaginationContainer /> */}
      <HomeGallery />
      <BrandLogoSlider />
    </>
  );
}

export default Homepage;
