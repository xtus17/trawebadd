import React from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  extendTheme,
  VStack,
} from "@chakra-ui/react";
import screeenTravelCity from "../../Assets/screeenTravelCity.png";

const GlobalStyle = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#152939",
      },
    },
  },
});

export function Body() {
  return (
    <ChakraProvider theme={GlobalStyle}>
      <Box padding="15px" position="relative" display="flex">
        <Box
          display={{ base: "none", md: "flex" }}
          flex="1"
          //  display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            pt="70px"
            src={screeenTravelCity} // Reemplaza con la URL de tu imagen
            alt="Descripción de la imagen"
            transform="rotate(355deg)"
            width="50%" // Puedes ajustar el tamaño de la imagen
            height="auto"
          />
        </Box>

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack
            spacing={4}
            pl={{ base: "15", md: "35" }}
            pr={15}
            pt={{ base: "160px", md: "10px" }}
            align={{ base: "start", md: "start" }}
          >
            <Text
              color="white"
              fontSize={{ base: "25px", md: "37px" }}
              fontWeight="bold"
            >
              Descubre el mundo con TravelCity
            </Text>

            <Text
              fontWeight={"550"}
              //color="white"
              color="teal.300"
              fontSize={{ base: "13px", md: "17px" }}
            >
              Nuestra aplicación redefine la experiencia de explorar el mundo,
              llevando la planificación de viajes a nuevos niveles de
              conveniencia y emoción.
            </Text>
            <Text
              fontWeight={"550"}
              // color="#57dbf2"
              color="white"
              fontSize={{ base: "13px", md: "16px" }}
            >
              Desde descubrir destinos exóticos hasta crear itinerarios
              personalizados. Obtén información detallada sobre atracciones,
              restaurantes y eventos locales. Recibe notificaciones sobre
              festividades para disfrutar de ellas. Visualiza destinos con fotos
              y recorridos virtuales.
            </Text>

            <Text
              fontWeight={"550"}
              color="teal.300"
              fontSize={{ base: "13px", md: "17px" }}
            >
              Descarga nuestra App para convertir cada viaje en una aventura
              inolvidable, donde la exploración y la comodidad van de la mano.
              ¡Descubre el mundo como nunca antes!
            </Text>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
