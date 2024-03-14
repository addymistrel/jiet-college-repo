import { Box, Flex, HStack, Stack, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { slides } from "./slider-data";
import "./MainSlider.css";
import Navbar from "../Navbar/Navbar";
import CardsVid from "../CardsVid/CardsVid";
// import videoBg from "../";

export default function MainSlider() {
  // const arrowStyles = {
  //   cursor: "pointer",
  //   pos: "absolute",
  //   top: "50%",
  //   w: "auto",
  //   mt: "-22px",
  //   p: "16px",
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: "18px",
  //   transition: "0.6s ease",
  //   borderRadius: "0 3px 3px 0",
  //   userSelect: "none",
  //   bg: "black",
  //   _hover: {
  //     bg: "white",
  //     color: "black",
  //     opacity: 0.8,
  //   },
  // };
  // const slides = [
  //   {
  //     img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "First Slide",
  //     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Second Slide",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  //     label: "Third Slide",
  //     description:
  //       "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Fourth Slide",
  //     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Fifth Slide",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  // ];
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slidesCount = slides.length;

  // const prevSlide = () => {
  //   setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  // };

  // const setSlide = (slide) => {
  //   setCurrentSlide(slide);
  // };

  // const carouselStyle = {
  //   transition: "all .5s",
  //   ml: `-${currentSlide * 100}%`,
  // };
  // const SLIDES_INTERVAL_TIME = 5000;
  // const ANIMATION_DIRECTION = "right";
  // useEffect(() => {
  //   const automatedSlide = setInterval(() => {
  //     ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
  //   }, SLIDES_INTERVAL_TIME);
  //   return () => clearInterval(automatedSlide);
  // }, [slidesCount]);
  return (
    <div className="main-vid">
      <div class="slider">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>
      <div class="container-slide">
        <div class="title-slid">
          <div className="upper">
            <h5>APPLY TODAY FOR</h5>
          </div>
          <div className="lower">
            <h1>JIET COLLEGE PROGRAMS</h1>
          </div>
        </div>
        <div class="content-slide">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                {/* <span class="details">Full Name</span> */}
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                {/* <span class="details">Username</span> */}
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="input-box">
                {/* <span class="details">Email</span> */}
                <input type="text" placeholder="Enter Mobile No" required />
              </div>
              <div class="input-box">
                {/* <span class="details">Phone Number</span> */}
                <input type="text" placeholder="Enter City" required />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div class="button-slide">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
