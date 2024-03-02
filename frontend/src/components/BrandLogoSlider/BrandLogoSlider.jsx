import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandLogoSlider.css";

const BrandLogoSlider = () => {
  const images = [
    "./assets/images/upload/tata.png",
    "./assets/images/upload/Whirlpool.png",
    "./assets/images/upload/hcl.png",
    "./assets/images/upload/herohonda.png",
    "./assets/images/upload/ibm.png",
    "./assets/images/upload/tcs.png",
    "./assets/images/upload/amazon.png",
    "./assets/images/upload/Vmware.png",
    "./assets/images/upload/dell.png",
    "./assets/images/upload/Fortinet.png",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4, // Adjust the number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, // Adjust the sliding speed
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="brand-logo-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogoSlider;
