import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import TopHeader from "../../components/TopHeaderAbout/topHeaderAbout";

const CivilDepartment = () => {
  const [institutionText, setInstitutionText] = useState("");
  const [aicteText, setAICTEText] = useState("");
  const [ind, setInd] = useState(0);
  const [toStart, setStart] = useState(false);
  useEffect(() => {
    const institution = "JIET GROUP OF INSTITUTION";
    var insLength = institution.length;

    setTimeout(() => {
      if (ind !== insLength) {
        setInstitutionText(institutionText + institution[ind]);
        setInd(ind + 1);
      }
    }, 100);
    if (institutionText.length === 25) {
      setStart(true);
      setInd(0);
    }
  }, [institutionText]);

  useEffect(() => {
    if (toStart === true) {
      const aicte = "APPROVED BY AICTE";
      const aicLength = aicte.length;
      setTimeout(() => {
        if (ind !== aicLength) {
          setAICTEText(aicteText + aicte[ind]);
          setInd(ind + 1);
        }
      }, 100);
    }
  }, [aicteText, toStart]);
  return (
    <>
      <TopHeader text1={institutionText} text2={aicteText} />
      <Box
        p={8}
        m={4}
        boxShadow="lg"
        borderRadius="md"
        bg="white"
        maxW="85%"
        mx="auto"
      >
        <Heading as="h1" size="xl" mb={4} color="teal.500">
          Department of Civil Engineering
        </Heading>

        <Text fontSize={{ base: "lg", md: "s" }} mb={6}>
          With urbanization and infrastructure development there has been urgent
          need for good designer and construction engineers. So, Civil
          engineering is a professional engineering discipline that deals with
          the design, construction, and maintenance of the physical and
          naturally built environment, including works like roads, bridges,
          canals, dams, and buildings. Civil engineering takes place in the
          public sector from municipal through to national governments, and in
          the private sector from individual home owners through to
          international companies.
        </Text>
        <Flex justify="space-between" direction={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={4} mb={8}>
            <Heading as="h4" size="lg" color="teal.500">
              Salient Features
            </Heading>
            <List spacing={2}>
              <ListItem>
                <span>&#8605;</span> CAD Lab for Design of Civil Structures.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Soil and Water Testing Lab.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> On Site lecture and demonstration of
                practices.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Mountain and Table Survey for Practical
                knowledge.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Collaboration with reputed builders and
                firms.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Special Lecture from Town and Planning
                departments.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Environmental Engineering and conservation
                studies.
              </ListItem>
              <ListItem>
                <span>&#8605;</span> Use of Computerized Total Station for
                offsite Surveying.
              </ListItem>
            </List>
          </VStack>

          <VStack align="start" spacing={4} mb={8}>
            <Heading as="h4" size="lg" color="teal.500">
              Scope for Higher Education
            </Heading>
            <Text fontSize="lg">
              <span>&#8611;</span> Masters of Technology in Civil <br />
              <span>&#8611;</span> Masters in Building Design <br />
              <span>&#8611;</span> Masters in Construction Engineering
              <br />
              <span>&#8611;</span> Masters in Control Engineering <br />
              <span>&#8611;</span> Masters in Transport Engineering <br />
              <span>&#8611;</span> Masters in Soil and Structural Engineering{" "}
              <br />
              <span>&#8611;</span> Masters in Environmental Engineering <br />
            </Text>
          </VStack>
        </Flex>

        <Flex justify="space-between" direction={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={4} mb={8}>
            <Heading as="h4" size="lg" color="teal.500">
              Major Labs
            </Heading>
            <List spacing={2}>
              <ListItem>
                <span>&#8618;</span> Survey Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Soil Engineering Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> FM Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Water Testing Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> RCC Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Concrete lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Irrigation Engineering Lab
              </ListItem>

              <ListItem>
                <span>&#8618;</span> Bridge Engineering lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Transportation Engineering Lab
              </ListItem>
              <ListItem>
                <span>&#8618;</span> Railways and Tunnels Lab
              </ListItem>
            </List>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h4" size="lg" color="teal.500">
              Scope for Civil Engineers
            </Heading>
            <List spacing={2}>
              <ListItem>
                <span>&#8627;</span> Graduate of Civil engineering has following
                job avenues in their portfolio:
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Public Works Department (State PWD, CPWD)
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Private Construction Companies
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Railways, Metro Rail Corporation
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Irrigation Department Public Health
                Department
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Disaster Management
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Environmental Pollution and Control
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Private Contractor and Developer
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Architecture and Designer
              </ListItem>
              <ListItem>
                <span>&#8627;</span> Surveyor and evaluator
              </ListItem>
            </List>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default CivilDepartment;
