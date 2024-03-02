import { ReactNode, useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={"/signin"}>
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
              <Link to={"/signin"}>
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
              <Link to={"/signin"}>
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
              <Link to={"/signin"}>
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
              <Link>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={FaFacebook} />
                </Button>
              </Link>
              <Link to={"/addtocart"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={AiFillTwitterCircle} />
                </Button>
              </Link>
              <Link to={"/addtocart"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={TbBrandYoutubeFilled} />
                </Button>
              </Link>
              <Link to={"/addtocart"}>
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
                <Link>
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
                      <li>Overview</li>
                      <li>Mission & Vision</li>
                      <li>Leadership</li>
                      <li>Chairman Meessage</li>
                      <li>Dignitaries Visit</li>
                      <li>Govt. Affliations</li>
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
                      <li>Post Graduate</li>
                      <li>Under Graduate</li>
                      <li>Diploma</li>
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
                      <li>Computer Science & Engineering</li>
                      <li>Electrical Engineering</li>
                      <li>Mechanical Engineering</li>
                      <li>Civil Engineering</li>
                      <li>Management Studies(BBA)</li>
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
                      <li>Student Centre</li>
                      <li>Recreational Room</li>
                      <li>Amaya Mess</li>
                      <li>Sports at JIET</li>
                      <li>industrial Exposure</li>
                      <li>Admission</li>
                    </ul>
                  )}
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    JIND Genius
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Career Service
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Apply Now 2023
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Admission
                  </Button>
                </Link>

                <Link to={"/jwellery/Bestseller"}>
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
          <ButtonGroup
            justifyContent={"space-around"}
            display={"flex"}
            variant={"unstyled"}
            ml={"10rem"}
            mr={"10rem"}
            flexWrap={"wrap"}
            color={useColorModeValue("black", "white")}
          >
            <Link to={"/jwellery/Bestseller"}>
              <Button as={Button} className="btn">
                HOME
              </Button>
            </Link>
            <Menu>
              <MenuButton as={Button} className="btn">
                ABOUT US
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Overview</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Mission & Vision</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Leadership</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Chairman Message</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Dignitaries Visit</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Govt. Affliations</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                className="btn"
                onMouseEnter={() => setmenu2(true)}
                onMouseLeave={() => setmenu2(false)}
              >
                PROGRAMS
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Post Graduate</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Under Graduate</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Diploma</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                className="btn"
                onMouseEnter={() => setmenu3(true)}
                onMouseLeave={() => setmenu3(false)}
              >
                DEPARTMENTS
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Computer Science & Engineering</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Electrical Engineering</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Mechanical Engineering</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Civil Engineering</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Management Studies(BBA)</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                className="btn"
                onMouseEnter={() => setmenu4(true)}
                onMouseLeave={() => setmenu4(false)}
              >
                CAMPUS LIFE
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Student Centre</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Recreational Room</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Amaya Mess</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Sports at JIET</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Industrial Exposure</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>Admission</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Link to={"/jwellery/Chain"}>
              <Button className="btn">GALLERY</Button>
            </Link>
            <Link to={"/jwellery/Kada"}>
              <Button className="btn">JIND GENIUS</Button>
            </Link>
            {/* <Menu>
              <MenuButton as={Button} className="btn">
                OTHER JEWELLERY
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>HARAM</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Jewellery Set"}>
                    <Button>JEWELLERY SET</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Maang Tikka"}>
                    <Button>MAANG TIKKA</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Mangalsutra"}>
                    <Button>MANGALSUTRAS</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Necklace"}>
                    <Button>NECKLACES</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Pendant"}>
                    <Button>PENDENT</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu> */}
          </ButtonGroup>
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
