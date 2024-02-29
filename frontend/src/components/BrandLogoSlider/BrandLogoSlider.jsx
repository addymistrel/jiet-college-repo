import React from "react";
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const logos = [
  { id: 1, src: "path/to/logo1.png", alt: "Logo 1" },
  { id: 2, src: "path/to/logo2.png", alt: "Logo 2" },
  { id: 3, src: "path/to/logo3.png", alt: "Logo 3" },
  { id: 4, src: "path/to/logo4.png", alt: "Logo 4" },
  { id: 5, src: "path/to/logo5.png", alt: "Logo 5" },
  { id: 6, src: "path/to/logo6.png", alt: "Logo 6" },
  { id: 7, src: "path/to/logo7.png", alt: "Logo 7" },
];

const logosLoop = Array.from({ length: 100 }, () => logos).flat();

const animationSpeed = `500s`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * ${logosLoop.length})); }
`;

const BrandLogoSlider = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        height="100px"
        margin="auto"
        overflow="hidden"
        position="relative"
        width="auto"
        className="slider"
      >
        <Box
          display="flex"
          width={`calc(250px * ${logosLoop.length})`}
          css={{
            animation: `${scroll} ${animationSpeed} linear infinite`,
          }}
          className="slide-track"
        >
          {logosLoop.map((logo) => (
            <Box key={logo.id} height="100px" width="250px" className="slide">
              <img src={logo.src} height="100" width="250" alt={logo.alt} />
            </Box>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default BrandLogoSlider;
