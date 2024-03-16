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
import StickyBar from "../../components/StickyBar/StickyBar";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <StickyBar />
      <MainSlider />
      <Unique />
      <BranchCards />
      <TextVideo />
      <NewsScroll />
      <WithSpeechBubbles />
      <HomeGallery />
      <BrandLogoSlider />
    </>
  );
}

export default Homepage;
