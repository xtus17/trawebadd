import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Collapse,
  VStack,
  Image,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { RiCloseCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoTravelCity from "../../Assets/LogoTravelCity.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative">
      <Image
        alt="Cover image"
        src={LogoTravelCity}
        width="50px"
        height="50px"
        position="absolute"
        left="0"
        top="0"
        ml="2"
      />
      <Text
        color="white"
        fontWeight="bold"
        position="absolute"
        left="65px"
        top="10px"
      >
        TravelCity
      </Text>

      <Button
        onClick={handleToggle}
        display={{ base: "block", md: "none" }}
        leftIcon={isOpen ? <RiCloseCircleFill /> : <GiHamburgerMenu />}
        position="absolute"
        right="0"
        top="0"
        mt=""
        mr=""
        zIndex="999"
      ></Button>

      <HStack
        align="end"
        mt={2}
        pt={4}
        // color="white"
        rounded="md"
        shadow="md"
        display={{ base: "none", md: "flex" }}
        position="absolute"
        right="0"
        top="0"
      >
        <Button
          zIndex="999"
          color="black"
          bg="teal.300"
          _hover={{ bg: "black", color: "white" }}
        >
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="/"
          >
            Inicio
          </Link>
        </Button>

        <Button
          zIndex="999"
          color="black"
          bg="teal.300"
          _hover={{ bg: "black", color: "white" }}
        >
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="/term"
          >
            Términos
          </Link>
        </Button>

        <Button
          zIndex="999"
          color="black"
          bg="teal.300"
          _hover={{ bg: "black", color: "white" }}
        >
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="/form"
          >
            Contacto
          </Link>
        </Button>
      </HStack>

      <Collapse
        in={isOpen}
        style={{ position: "absolute", right: 0, top: "25px", width: "100%" }}
      >
        <VStack align="end" mt={2} pt={4} rounded="md" shadow="md">
          <Button>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href="/"
            >
              Inicio
            </Link>
          </Button>
          <Button>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href="/term"
            >
              Términos
            </Link>
          </Button>
          <Button>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              href="/form"
            >
              Contacto
            </Link>
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
}

export function Hero() {
  return (
    <ChakraProvider>
      <Box p={3}>
        <Navbar />
      </Box>
    </ChakraProvider>
  );
}
