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
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>
        Department of Computer Science & Engineering
      </Heading>

      <Text mb={6}>
        The Department of Computer Science & Engineering is a premier department
        at Jind Institute of Engineering and Technology, Jind. Established in
        1998, the department has been serving society by training quality
        engineers. Regular seminars, corporate training, and workshops conducted
        by experts prepare students for future software professionals.
        Personality development programs (PDP) are held to enhance their
        technical skills.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={4}>
        Salient Features
      </Heading>

      <List spacing={3} mb={6}>
        <ListItem>Team of Qualified and Experienced Faculty members.</ListItem>
        <ListItem>
          Connectivity to Internet through OFC based 4Mbps lease line.
        </ListItem>
        <ListItem>
          MOU with various Industries like Priya Industries Ltd, Wipro, TCS ION,
          Allbiz, Cognizant etc. for industry related projects and work.
        </ListItem>
        <ListItem>
          More than 600 computers of various brands and reputed companies.
        </ListItem>
        <ListItem>Wi-Fi facility is available for students.</ListItem>
        <ListItem>Regular Workshop/Seminars.</ListItem>
        <ListItem>
          Visiting Faculties from reputed Institutes Like DCE, NIT, NSIT, IIT,
          and Universities regularly visit the department.
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mb={4}>
        Scope for Higher Education
      </Heading>

      <Text mb={6}>
        - Masters of Technology <br />
        - Masters in Control Engineering <br />
        - Post Graduate in System Maintenance Engineering <br />
        - CCNA, MCSE, MCSP <br />
        - Web Designer <br />
        - Software Developer <br />
        - Software Testing, Editing, and Rating <br />- Language Lab
      </Text>

      <Heading as="h3" size="lg" mb={4}>
        Major Labs
      </Heading>

      <VStack spacing={4} mb={6}>
        <Box bg="teal.200" p={8} borderRadius="lg">
          <Heading as="h4" size="md">
            General Purpose Lab
          </Heading>
          <Text>Content for General Purpose Lab...</Text>
        </Box>

        <Box bg="teal.200" p={8} borderRadius="lg">
          <Heading as="h4" size="md">
            Central Computing Lab
          </Heading>
          <Text>Content for Central Computing Lab...</Text>
        </Box>

        {/* Add similar sections for other labs */}
      </VStack>

      <Heading as="h3" size="lg" mb={4}>
        Scope for Computer Engineers
      </Heading>

      <List spacing={3} mb={6}>
        <ListItem>
          Software developer/programmer in software companies.
        </ListItem>
        <ListItem>
          Hardware Engineer in computer manufacturing companies.
        </ListItem>
        <ListItem>
          Maintenance/service engineer in units using computers.
        </ListItem>
        <ListItem>Network engineer in units using computers.</ListItem>
        <ListItem>
          Entrepreneurship opportunities - starting their own company as a
          service provider for software development, servicing, supplier for
          computers, and spares.
        </ListItem>
      </List>
    </Box>
  );
};

export default CseDepartment;
