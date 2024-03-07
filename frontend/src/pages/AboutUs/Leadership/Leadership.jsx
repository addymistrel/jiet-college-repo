import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import "./Leadership.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";

const ColoredDivider = ({ color, thickness }) => (
  <Divider borderColor={color} borderWidth={thickness} />
);

const Leadership = () => {
  const [institutionText, setInstitutionText] = useState("");
  const [aicteText, setAICTEText] = useState("");
  const [ind, setInd] = useState(0);
  const [toStart, setStart] = useState(false);

  useEffect(() => {
    const institution = "JIET GROUP OF INSTITUTION";
    const insLength = institution.length;

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
    if (toStart) {
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

  const sideData = [
    { head: "Overview", link: "#" },
    { head: "Mission & Vision", link: "#" },
    { head: "Leadership", link: "#" },
    { head: "Dignitaries Visit", link: "#" },
    { head: "Govt. Affiliation", link: "#" },
  ];

  return (
    <>
      <TopHeader text1={institutionText} text2={aicteText} />
      <div className="main-box">
        <div className="child-1">
          <Box pb={8} textAlign="center">
            <div>
              <Stack pos="relative" height="200px" w="100%" />
              <Box
                boxShadow={useColorModeValue(
                  "0 4px 6px rgba(160, 174, 192, 0.6)",
                  "0 4px 6px rgba(9, 17, 28, 0.9)"
                )}
                bg={useColorModeValue("white", "gray.800")}
                p={{ base: 4, sm: 8 }}
                overflow="hidden"
                rounded="2xl"
                mx="auto"
              >
                <ColoredDivider color="red.700" thickness={1.5} />
                <br />
                <Box display="flex" justifyContent="center" mb={4}>
                  <Image
                    src="/assets/images/images/sksingh.png"
                    alt="Your Image Alt Text"
                    maxW="90%"
                    height="auto"
                  />
                </Box>
                <Stack
                  pos="relative"
                  zIndex={1}
                  direction="column"
                  spacing={5}
                  maxW="100%"
                >
                  <chakra.h2
                    color="gray.600"
                    fontSize="20px"
                    maxW="90%"
                    lineHeight={1.2}
                    mx="auto"
                    textAlign="left"
                    textColor="red"
                    fontStyle={"italic"}
                    fontWeight="bold"
                  >
                    ❝ Decent education is a passport to a good, comfortable, and
                    secured life. It enables youngsters to become contributing
                    members of society through knowledge, skills, and character
                    development. To achieve this, the management has provided
                    all infrastructure facilities required for quality
                    education. The institution has spacious classrooms, fully
                    equipped laboratories, workshops, computer centres, and
                    drawing halls. The institute has a placement cell that
                    interacts with leading industries, arranges campus
                    interviews, and offers ample job opportunities for the
                    students of all disciplines. Besides bestowing engineering
                    knowledge, great emphasis is laid on character building and
                    discipline among the students. Jind Institute of Engineering
                    & Technology is working efficiently to achieve proficiency
                    in technical education. ❞
                  </chakra.h2>
                  <br />
                  <br />
                </Stack>
                <Box display="flex" justifyContent="center" mb={4}>
                  <Image
                    src="/assets/images/images/abhishek.png"
                    alt="Your Image Alt Text"
                    maxW="90%"
                    height="auto"
                  />
                </Box>
                <Stack
                  pos="relative"
                  zIndex={1}
                  direction="column"
                  spacing={5}
                  maxW="100%"
                >
                  <chakra.h2
                    color="gray.600"
                    fontSize="20px"
                    maxW="90%"
                    lineHeight={1.2}
                    mx="auto"
                    textAlign="left"
                    textColor="red"
                    fontStyle={"italic"}
                    fontWeight="bold"
                  >
                    Dear Aspirant,
                    <br />
                    ❝ This is my heartily welcome you in joining India's fastest
                    growing Institution and trusting the vision we have been
                    striving since two decades. we are dedicated in achieving
                    students placement and academic growth with no compromise on
                    overall development of students. Accomplishing social and
                    morally dedicated students transforming young minds of India
                    and abroad in much more stable difizens. Our vision is to
                    transform young buds into glorious flowers by inculcating
                    the seeds of academic and technical proficiency.
                    <br />
                    We disseminate advanced studying techniques and foster in
                    industrial training in so much perseverance that the career
                    of students are always progressing. ❞
                    <br />
                    New Initiative by JIET Group of Institutions.
                  </chakra.h2>
                  <br />
                  <br />
                </Stack>
                <Box display="flex" justifyContent="center" mb={4}>
                  <Image
                    src="/assets/images/images/ashish.png"
                    alt="Your Image Alt Text"
                    maxW="90%"
                    height="auto"
                  />
                </Box>
                <Stack
                  pos="relative"
                  zIndex={1}
                  direction="column"
                  spacing={5}
                  maxW="100%"
                >
                  <chakra.h2
                    color="gray.600"
                    fontSize="20px"
                    maxW="90%"
                    lineHeight={1.2}
                    mx="auto"
                    textAlign="left"
                    textColor="red"
                    fontStyle={"italic"}
                    fontWeight="bold"
                  >
                    ❝ The institute encourages students fo organize different
                    adivities independently or with the support and guidance of
                    faculty such as - management conventions, business plan
                    competitions, talks by leading professionals, cultural
                    events, sports acivifies for their holistic development that
                    adds the much needed value by inculcating in them skills -
                    organization, team building, decision making and technical
                    innovations. The institute hos dose collaboration with the
                    corporate world for mutual benefits such as summer
                    placements fostudents, introduction of need based new
                    courses and inputsin the curricula, guest speakers,
                    technical workshops and management development programmes to
                    meet manpower development needs of the corporate sector as
                    also intellectual inputs by way of consulting for solving
                    their live problems by young minds and experienced faculty.
                    It has been especially nurturing relationships with the
                    corporate world fo extend best of placement opportunities
                    toifs graduates. ❞
                  </chakra.h2>
                  <br />
                  <br />
                </Stack>
              </Box>
            </div>
          </Box>
        </div>
        <div className="child-2">
          <Siders sideData={sideData} />
        </div>
      </div>
    </>
  );
};

export default Leadership;
