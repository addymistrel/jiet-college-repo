import { ReactNode, useContext, useState } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  ButtonGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
  ReactIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import "./Navbar.css";
import { Image } from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menu1, setmenu1] = useState(false);
  const [menu2, setmenu2] = useState(false);
  const [menu3, setmenu3] = useState(false);
  const [menu4, setmenu4] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const token = JSON.parse(localStorage.getItem("token"));

  const [AllDataArr, setAllDataArr] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [toggle, setToggle] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  console.log(toggle);

  const handlePara = (id) => {
    console.log(id);
    navigate(`/details/${id}`);
    setSearchData([]);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  /*Search*/
  const handleSearch = (str) => {
    console.log(str);
  };

  const [str, setStr] = useState("");
  function handleRing() {
    setStr("Ring");
    localStorage.setItem("product", JSON.stringify(str));
  }

  function handleBrac() {
    setStr("Bracelet");
    localStorage.setItem("product", JSON.stringify(str));
  }
  /* Search Over*/
  return (
    <>
      <Box
        color={useColorModeValue("black", "black")}
        px={4}
        bgColor={"#de0c0c"}
        minWidth={"-webkit-fit-content"}
      >
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor={"#de0c0c"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={"flex"}
              w={{ base: "10rem", md: "15rem" }}
              fontSize={{ sm: "10px", md: "20px" }}
              mt={"1%"}
            >
              <Link to={"/"}>
                <Image src="/assets/images/logo.jpg" width="42%"></Image>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "none", lg: "flex" }}
              mr={"10px"}
            >
              {/* <ButtonGroup fontWeight={"300"} spacing={5}>
                <Button
                  variant={"unstyled"}
                  leftIcon={<TbHomeEco />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn"
                >
                  FREE TRY AT HOME
                </Button>

                <Button
                  variant={"unstyled"}
                  leftIcon={<FaHandHoldingHeart />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn"
                >
                  PLAN OF PURCHASE
                </Button>
              </ButtonGroup> */}
              {/* <InputGroup display={{ base: "none", md: "none", lg: "block" }}>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="black" />
                </InputRightElement>
                <Input
                  onChange={(el) => handleSearch(el.target.value)}
                  type="text"
                  placeholder="Search Here.."
                  bg={useColorModeValue("white", "#eee")}
                />
              </InputGroup> */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ButtonGroup display={{ base: "none", md: "none", lg: "flex" }}>
              <Link to={"/career"}>
                <Button
                  className="abovebtn"
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("white", "purple")}
                  _hover={{ background: "black", color: "white" }}
                  display={token ? "none" : "flex"}
                >
                  Career Service
                </Button>
              </Link>
              <Link to={"/apply"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  _hover={{ background: "black", color: "white" }}
                  color={useColorModeValue("white", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Apply Now 2023
                </Button>
              </Link>
              <Link to={"/admission"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  _hover={{ background: "black", color: "white" }}
                  color={useColorModeValue("white", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Admission
                </Button>
              </Link>
              <Link to={"/alumini"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  _hover={{ background: "black", color: "white" }}
                  color={useColorModeValue("white", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Alumini
                </Button>
              </Link>
              <Link to={"https://www.facebook.com/jindjiet/"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={FaFacebook} />
                </Button>
              </Link>
              <Link to={"https://twitter.com/jind_jiet"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={AiFillTwitterCircle} />
                </Button>
              </Link>
              <Link
                to={"https://www.youtube.com/channel/UCYaozWawBXCa0TNz_wN494A"}
              >
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={TbBrandYoutubeFilled} />
                </Button>
              </Link>
              <Link
                to={
                  "https://www.instagram.com/jiet_group_of_institutions/?igshid=mdltrpknbha0"
                }
              >
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={AiFillInstagram} />
                </Button>
              </Link>
            </ButtonGroup>

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={"black"}
              >
                <Button variant={"unstyled"} className="abtn">
                  <Icon as={FaUserAlt} />
                </Button>
              </MenuButton>
              <MenuList color={useColorModeValue("black", "white")}>
                <MenuItem display={token ? "none" : "block"}>
                  <Link to={"/signup"}>
                    <Button variant={"unstyled"}>Signup</Button>
                  </Link>
                </MenuItem>

                <MenuItem display={token ? "none" : "block"}>
                  <Link to={"/signin"}>
                    <Button variant={"unstyled"}>Login</Button>
                  </Link>
                </MenuItem>

                <MenuItem display={token ? "block" : "none"}>
                  <Link>
                    <Button variant={"unstyled"} onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Button variant={"unstyled"}>Profile</Button>
                </MenuItem>
                <MenuItem>
                  <Link to={"/addtocart"}>
                    <Button variant={"unstyled"}>Cart</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button onClick={toggleColorMode} variant={"unstyled"}>
                    {colorMode === "light" ? "Dark Theme" : "Light Theme"}
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
          <IconButton
            color={useColorModeValue("black", "black")}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ButtonGroup
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Spacer />
                <Link to={"/"}>
                  <Button as={Button} className="btn">
                    Home
                  </Button>
                </Link>
                <Link>
                  <Button
                    as={Button}
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle((prev) => ({
                        ...prev,
                        1: !toggle[1],
                        2: false,
                        3: false,
                        4: false,
                      }));
                    }}
                  >
                    About Us
                  </Button>
                  {toggle[1] && (
                    <ul className="internal-nav">
                      <Link to={"/aboutus/overview"}>
                        <li>Overview</li>
                      </Link>
                      <Link to={"/aboutus/mission"}>
                        <li>Mission & Vision</li>
                      </Link>
                      <Link to={"/aboutus/leadership"}>
                        <li>Leadership</li>
                      </Link>
                      <Link to={"/aboutus/cmessage"}>
                        <li>Chairman Meessage</li>
                      </Link>
                      <Link to={"/aboutus/dvisit"}>
                        <li>Dignitaries Visit</li>
                      </Link>
                      <Link to={"/aboutus/affiliations"}>
                        <li>Govt. Affliations</li>
                      </Link>
                    </ul>
                  )}
                </Link>
                <Link>
                  <Button
                    as={Button}
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle((prev) => ({
                        ...prev,
                        2: !toggle[2],
                        1: false,
                        3: false,
                        4: false,
                      }));
                    }}
                  >
                    Programs
                  </Button>
                  {toggle[2] && (
                    <ul className="internal-nav">
                      <Link to={"/programs/postgraduate"}>
                        <li>Post Graduate</li>
                      </Link>
                      <Link to={"/programs/undergraduate"}>
                        <li>Under Graduate</li>
                      </Link>
                      <Link to={"/programs/diploma"}>
                        <li>Diploma</li>
                      </Link>
                    </ul>
                  )}
                </Link>
                <Link>
                  <Button
                    as={Button}
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle((prev) => ({
                        ...prev,
                        3: !toggle[3],
                        2: false,
                        1: false,
                        4: false,
                      }));
                    }}
                  >
                    Departments
                  </Button>
                  {toggle[3] && (
                    <ul className="internal-nav">
                      <Link to={"/departments/cse"}>
                        <li>Computer Science & Engineering</li>
                      </Link>
                      <Link to={"/departments/ee"}>
                        <li>Electrical Engineering</li>
                      </Link>
                      <Link to={"/departments/me"}>
                        <li>Mechanical Engineering</li>
                      </Link>
                      <Link to={"/departments/ce"}>
                        <li>Civil Engineering</li>
                      </Link>
                      <Link to={"/departments/bba"}>
                        <li>Management Studies(BBA)</li>
                      </Link>
                    </ul>
                  )}
                </Link>
                <Link>
                  <Button
                    as={Button}
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle((prev) => ({
                        ...prev,
                        4: !toggle[4],
                        2: false,
                        3: false,
                        1: false,
                      }));
                    }}
                  >
                    Campus Life
                  </Button>
                  {toggle[4] && (
                    <ul className="internal-nav">
                      <Link to={"/campus/scentre"}>
                        <li>Student Centre</li>
                      </Link>
                      <Link to={"/campus/rroom"}>
                        <li>Recreational Room</li>
                      </Link>
                      <Link to={"/campus/mess"}>
                        <li>Amaya Mess</li>
                      </Link>
                      <Link to={"/campus/sports"}>
                        <li>Sports at JIET</li>
                      </Link>
                      <Link to={"/campus/iexposure"}>
                        <li>industrial Exposure</li>
                      </Link>
                      <Link to={"/admission"}>
                        <li>Admission</li>
                      </Link>
                    </ul>
                  )}
                </Link>
                <Link to={"/jindgenius"}>
                  <Button as={Button} className="btn">
                    JIND Genius
                  </Button>
                </Link>
                <Link to={"/career"}>
                  <Button as={Button} className="btn">
                    Career Service
                  </Button>
                </Link>
                <Link to={"/apply"}>
                  <Button as={Button} className="btn">
                    Apply Now 2023
                  </Button>
                </Link>
                <Link to={"/admission"}>
                  <Button as={Button} className="btn">
                    Admission
                  </Button>
                </Link>

                <Link to={"/alumini"}>
                  <Button as={Button} className="btn">
                    Alumini
                  </Button>
                </Link>
              </ButtonGroup>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <Box
          boxShadow="md"
          p="2"
          bg={useColorModeValue("white", "black")}
          minWidth={"-moz-fit-content"}
          display={{ base: "none", md: "none", lg: "block" }}
        >
          <ul
            class="hList"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li>
              <a href="/" class="menu">
                <h2 class="menu-title">Home</h2>
              </a>
            </li>
            <li>
              <a href="" class="menu">
                <h2 class="menu-title menu-title_2nd">About Us</h2>
                <ul class="menu-dropdown">
                  <li>
                    <Link to={"/aboutus/overview"}>Overview</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus/mission"}>Mission & Vision</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus/leadership"}>Leadership</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus/cmessage"}>Chairman Message</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus/dvisit"}>Dignitaries Visit</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus/affiliations"}>Govt. Affiliation</Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="" class="menu">
                <h2 class="menu-title menu-title_3rd">Programs</h2>
                <ul class="menu-dropdown">
                  <li>
                    <Link to={"/programs/postgraduate"}>Post Graduate</Link>
                  </li>
                  <li>
                    <Link to={"/programs/undergraduate"}>Under Graduate</Link>
                  </li>
                  <li>
                    <Link to={"/programs/diploma"}>Diploma</Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="" class="menu">
                <h2 class="menu-title menu-title_4th">Departments</h2>
                <ul class="menu-dropdown">
                  <li>
                    <Link to={"/departments/cse"}>
                      Computer Science & Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to={"/departments/ee"}>Electrical Engineering</Link>
                  </li>
                  <li>
                    <Link to={"/departments/me"}>Mechanical Engineering</Link>
                  </li>
                  <li>
                    <Link to={"/departments/ce"}>Civil Engineering</Link>
                  </li>
                  <li>
                    <Link to={"/departments/bba"}>
                      Management Studies (BBA)
                    </Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="" class="menu">
                <h2 class="menu-title menu-title_4th">Campus Life</h2>
                <ul class="menu-dropdown">
                  <li>
                    <Link to={"/campus/scentre"}>Student Centre</Link>
                  </li>
                  <li>
                    <Link to={"/campus/rroom"}>Recreational Room</Link>
                  </li>
                  <li>
                    <Link to={"/campus/mess"}>Amaya Mess</Link>
                  </li>
                  <li>
                    <Link to={"/campus/sports"}>Sports at JIET</Link>
                  </li>
                  <li>
                    <Link to={"/campus/iexposure"}>Industrial Exposure</Link>
                  </li>
                  <li>
                    <Link to={"/admission"}>Admission</Link>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="/gallery" class="menu">
                <h2 class="menu-title menu-title_4th">Gallery</h2>
              </a>
            </li>
            <li>
              <a href="/jindgenius" class="menu">
                <h2 class="menu-title menu-title_4th">JIND GENIUS</h2>
              </a>
            </li>
          </ul>
        </Box>
        <Box
          pt={"1%"}
          pl={"1%"}
          fontSize={"17px"}
          textTransform={"capitalize"}
          fontWeight={"700"}
          boxShadow={"xl"}
        >
          {searchData.map((el) => {
            return (
              <Text pb={"0.6%"} onClick={() => handlePara(el._id)}>
                <SearchIcon pr={"0.4%"} />
                {el.link}
              </Text>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
