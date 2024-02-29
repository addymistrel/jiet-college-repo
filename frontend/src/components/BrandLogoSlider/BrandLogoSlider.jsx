import React from "react";
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const animationSpeed = "40s";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
`;

const ImageSlider = () => {
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
          width="calc(250px * 14)"
          css={{
            animation: `${scroll} ${animationSpeed} linear infinite`,
          }}
          className="slide-track"
        >
          {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <Box key={index} height="100px" width="250px" className="slide">
              <img
                src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${index}.png`}
                height="100"
                width="250"
                alt=""
              />
            </Box>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ImageSlider;
