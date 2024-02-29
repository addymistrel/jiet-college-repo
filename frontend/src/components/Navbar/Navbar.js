import { ReactNode, useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
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
  Input,
  InputGroup,
  InputRightElement,
  background,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { TbHomeEco } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineGold } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
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
  const { colorMode, toggleColorMode } = useColorMode();

  const token = JSON.parse(localStorage.getItem("token"));

  const [AllDataArr, setAllDataArr] = useState([]);
  const [searchData, setSearchData] = useState([]);

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
        bgColor={"#eddff0"}
        minWidth={"-webkit-fit-content"}
      >
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor={"#eddff0"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={"flex"}
              w={{ base: "10rem", md: "15rem" }}
              fontSize={{ sm: "10px", md: "20px" }}
              mt={"1%"}
            >
              <Link to={"/"}>
                <Image src="/assets/images/logo.png" width="42%"></Image>
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
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("red", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Career Service
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("red", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Apply Now 2023
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("red", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Admission
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("red", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Alumini
                </Button>
              </Link>
              {/* <Link>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("purple", "purple")}
                  display={token ? "flex" : "none"}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </Link>
              <Button variant={"unstyled"}>
                <Icon className="abtn" as={AiFillHeart} />
              </Button>
              <Link to={"/addtocart"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={BsHandbagFill} />
                </Button>
              </Link> 
               <Button
                onClick={toggleColorMode}
                variant={"unstyled"}
                className="abtn"
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
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
                onClick={isOpen ? onClose : onOpen}
              >
                <Spacer />
                <Link>
                  <Button as={Button} className="btn">
                    Home
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    About Us
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Programs
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Departments
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    Campus Life
                  </Button>
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
            <Link to={"/jwellery/Bangle"}>
              <Button as={Button} className="btn">
                ABOUT US
              </Button>
            </Link>
            <Link to={"/jwellery/Ring"}>
              <Button as={Button} className="btn" onClick={handleRing}>
                PROGRAMS
              </Button>
            </Link>

            <Link to={"/jwellery/Bracelet"}>
              <Button as={Button} className="btn" onClick={handleBrac}>
                DEPARTMENTS
              </Button>
            </Link>
            <Link to={`/jwellery/Earrings`}>
              <Button as={Button} className="btn">
                CAMPUS LIFE
              </Button>
            </Link>
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