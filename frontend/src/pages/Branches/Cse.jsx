import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";

const CseDepartment = () => {
  return (
    <Box
      p={8}
      m={4}
      boxShadow="lg"
      borderRadius="md"
      bg="white"
      maxW="85%"
      mx="auto"
    >
      <Heading as="h2" size="xl" mb={4} color="teal.500">
        Department of Computer Science & Engineering
      </Heading>

      <Text fontSize="lg" mb={6}>
        Welcome to the Department of Computer Science & Engineering at Jind
        Institute of Engineering and Technology, Jind. Established in 1998, our
        department is committed to training quality engineers. We provide a
        range of services, including seminars, corporate training, and
        workshops, all conducted by experts, to prepare our students for
        successful careers as future software professionals. Our Personality
        Development Programs (PDP) classes are designed to enhance their
        technical skills and overall professional growth.
      </Text>

      <VStack align="start" spacing={4} mb={8}>
        <Heading as="h3" size="lg" color="teal.500">
          Salient Features
        </Heading>
        <List spacing={2}>
          {/* Add your list items here */}
        </List>
      </VStack>

      <VStack align="start" spacing={4} mb={8}>
        <Heading as="h3" size="lg" color="teal.500">
          Scope for Higher Education
        </Heading>
        <Text fontSize="lg">
          {/* Add your list items here */}
        </Text>
      </VStack>

      <VStack align="start" spacing={4} mb={8}>
        <Heading as="h3" size="lg" color="teal.500">
          Major Labs
        </Heading>
        <List spacing={2}>
          {/* Add your list items here */}
        </List>
      </VStack>

      <VStack align="start" spacing={4}>
        <Heading as="h3" size="lg" color="teal.500">
          Scope for Computer Engineers
        </Heading>
        <List spacing={2}>
          {/* Add your list items here */}
        </List>
      </VStack>
    </Box>
  );
};

export default CseDepartment;
