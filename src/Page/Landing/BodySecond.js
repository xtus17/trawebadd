import React from "react";
import {
  Image,
  VStack,
  Icon,
  Flex,
  Text,
  HStack,
  Box,
  Center,
  Heading,
  Divider,
  CardBody,
  Card,
  Stack,
} from "@chakra-ui/react";
import App from "../../Assets/appGallery.png";
import Google from "../../Assets/googlePlay.png";
import fondo1 from "../../Assets/fondo1.png";
import fondo2 from "../../Assets/fondo2.png";
import fondo3 from "../../Assets/fondo3.png";
import { MdPlace } from "react-icons/md";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

export function BodySecond() {
  return (
    <Box position="absolute" pt={{ base: "20px", md: "50px" }} width="100%">
      <VStack
        spacing={4}
        pl={{ base: "15", md: "35" }}
        pr={15}
        mt="5px"
        mb="40px"
      >
        <Box>
          <Text
            color="white"
            fontSize={{ base: "25px", md: "40px" }}
            fontWeight={"bold"}
          >
            Descarga nuestra App
          </Text>
        </Box>
        <HStack
          justifyContent="center"
          align="center"
          spacing={{ base: "12px", md: "80px" }}
        >
          <Image
            src={App}
            alt="Play Store"
            boxSize={{ base: "170px", md: "auto" }}
            h={{ base: "auto", md: "100px" }}
            objectFit="cover"
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
          <Image
            src={Google}
            alt="App Store"
            boxSize={{ base: "170px", md: "auto" }}
            h={{ base: "auto", md: "100px" }}
            objectFit="cover"
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </HStack>
      </VStack>

      {/* ***********************************/}
      <Flex direction={{ base: "column", md: "row" }} padding="25px">
        <Center flex="1" width={{ base: "350px", md: "100px" }}>
          <Box
            padding="25px"
            width={{ base: "1000px", md: "350px" }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              transform: "scale(1.05)",
            }}
          >
            <Card bg="green.50" maxW="sm">
              <CardBody>
                <Image
                  // src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  src={fondo3}
                />
                <Flex flexDirection="column" mb="20px">
                  <Icon
                    as={MdPlace}
                    border="5px solid #17d1e0"
                    mx="auto"
                    width="70px"
                    height="70px"
                    mt="-38px"
                    borderRadius="50%"
                    color="teal.300"
                  />
                </Flex>

                <Stack mt="6" spacing="3">
                  <Heading size="md">Regístrate fácilmente</Heading>
                  <Text>
                    Utiliza tu número de celular para registrarte rápido y
                    fácilmente a nuestra aplicación.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Box>
        </Center>
        {/* ***********************************/}
        <Center flex="1" width={{ base: "350px", md: "100px" }}>
          <Box
            padding="25px"
            width="350px"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              transform: "scale(1.05)",
            }}
          >
            <Card bg="green.50" maxW="sm">
              <CardBody>
                <Image
                  // src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  src={fondo1}
                />

                <Flex flexDirection="column" mb="20px">
                  <Icon
                    as={BsFillPinMapFill}
                    border="5px solid #17d1e0"
                    mx="auto"
                    width="70px"
                    height="70px"
                    mt="-38px"
                    borderRadius="50%"
                    color="teal.300"
                  />
                </Flex>

                <Stack mt="6" spacing="3">
                  <Heading size="md">Los mejores lugares</Heading>
                  <Text>
                    Con la mayor información de aquellos lugares que deseas
                    visitar, prepara tu viaje.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Box>
        </Center>

        {/************ */}

        <Center flex="1" width={{ base: "350px", md: "100px" }}>
          <Box
            padding="25px"
            width="350px"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              transform: "scale(1.05)",
            }}
          >
            <Card bg="green.50" maxW="sm">
              <CardBody>
                <Image
                  // src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  src={fondo2}
                />
                <Flex flexDirection="column" mb="20px">
                  <Icon
                    as={MdOutlineDarkMode}
                    border="5px solid #17d1e0"
                    mx="auto"
                    width="70px"
                    height="70px"
                    mt="-38px"
                    borderRadius="50%"
                    //  color="#17d1e0"
                    color="teal.300"
                  />
                </Flex>

                <Stack mt="6" spacing="3">
                  <Heading size="md">Modo Oscuro</Heading>
                  <Text>
                    Con una interfaz innovadora y continuando las tendencias,
                    disfruta de nuestra aplicación.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
}
