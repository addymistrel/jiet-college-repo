import React from "react";
import { Box, Center, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./BrandLogoSlider.css";

const BrandLogoSlider = () => {
  const logos = [
    "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
    "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
    "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
    "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
  ];

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
        >
          <Box display="flex" transition="transform 0.5s ease-in-out">
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

export default BrandLogoSlider;
