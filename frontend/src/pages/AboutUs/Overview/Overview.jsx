import React from "react";
import {
  chakra,
  Link,
  Stack,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import "./Overview.css";
const Overview = () => {
  return (
    <Box pb={8}>
      <Stack
        pos="relative"
        // bgGradient={`linear(to-l, red.500, red.400 , red.500)`}
        height="200px"
        w="100%"
      ></Stack>
      <Box
        maxW="8xl"
        p={4}
        isolation="isolate"
        zIndex={3}
        mt="-10rem"
        marginInline="auto"
      >
        <Box
          boxShadow={useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.9)"
          )}
          bg={useColorModeValue("white", "gray.800")}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
        >
          <Stack
            pos="relative"
            zIndex={1}
            direction="column"
            spacing={5}
            textAlign="center"
          >
            {/* <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Explore TemplatesKart
            </chakra.h1> */}
            <div className="heading-css-1">
              <h1>Haeding Css</h1>
            </div>
            <div class="heading-css-2">
              <h1>
                Heading Style heading-css-2
                <span>Example Tagline Text</span>
              </h1>
            </div>
            <chakra.h2
              color="gray.400"
              fontSize="xl"
              maxW="600px"
              lineHeight={1.2}
            >
              TemplatesKart is a set of more than 100 responsive components
              built with chakraUI. All components support dark/light color
              scheme and chakraUI theme customizations. TemplatesKart is free
              for everyone.
            </chakra.h2>

            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <chakra.button
                h={10}
                px={6}
                color="white"
                fontSize="md"
                variant="solid"
                rounded="md"
                lineHeight={1}
                bg="blue.400"
                _hover={{ bg: "blue.600" }}
              >
                View Components
              </chakra.button>
              <Button
                leftIcon={<FaGithub />}
                as={Link}
                href="#"
                rounded="md"
                colorScheme="gray"
                variant="solid"
              >
                Github Discussions
              </Button>
              <Button
                leftIcon={<BsDiscord />}
                as={Link}
                href="#"
                rounded="md"
                color="white"
                variant="solid"
                colorScheme="purple"
                _hover={{ bg: "purple.600" }}
              >
                Discord community
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
