import React, { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";
import "./testing.css";

const BarndLogoSlider = () => {
  const logos = [
    "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
    "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
    "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
    "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
  ];

  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000); // Adjust the time interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [logos.length]);

  return (
    <Box textAlign="center" py={8}>
      <h2>Our Partners</h2>
      <Center>
        <Box
          maxW="900px"
          mx="auto"
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
          borderWidth="1px"
          position="relative"
        >
          <Box
            display="flex"
            transition="transform 0.5s ease-in-out"
            transform={`translateX(-${currentLogo * 100}%)`}
            width={`${logos.length * 100}%`}
          >
            {logos.map((logo, index) => (
              <Box key={index} flex="0 0 auto" width="100%">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default BarndLogoSlider;
