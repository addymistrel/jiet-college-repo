import React, { useState, useEffect } from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const NewsScroller = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [scrolling, setScrolling] = useState(true);

  const news = [
    "Breaking News: React App Launched!",
    "New Features Added to our Website",
    "Tech Company Acquires Startup for Billions",
    "Weather Update: Sunny Skies Expected",
    "Global Economy on the Rise",
  ];

  useEffect(() => {
    let intervalId;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        setNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 3000); // Change the interval as needed
    };

    const stopScrolling = () => clearInterval(intervalId);

    if (scrolling) {
      startScrolling();
    }

    return () => stopScrolling();
  }, [news, scrolling]);

  return (
    <Box
      overflow="hidden"
      height="200px"
      width="300px"
      borderRadius="md"
      boxShadow="lg"
      transition="box-shadow 0.3s ease-in-out"
      _hover={{ boxShadow: "xl", cursor: "pointer" }}
      onMouseEnter={() => setScrolling(false)}
      onMouseLeave={() => setScrolling(true)}
      onClick={() => (window.location.href = "/news")} // Redirect to another page when the box is clicked
    >
      <Text
        backgroundColor="teal.500"
        color="white"
        textAlign="center"
        fontSize="lg"
        fontWeight="bold"
        paddingY="2"
      >
        Latest News
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        transition="transform 0.5s ease-in-out"
        transform={`translateY(${-newsIndex * 50}px)`}
      >
        {news.map((headline, index) => (
          <Link
            key={index}
            href="/news" // Change the actual URL for redirection
            textDecoration="none"
          >
            <Box
              height="50px"
              lineHeight="50px"
              borderBottom="1px solid #ccc"
              paddingX="4"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ background: "#f0f0f0" }}
            >
              {headline}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default NewsScroller;
