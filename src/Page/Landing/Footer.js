import { Link, Text, Image, Center } from "@chakra-ui/react";
import facebookTravelCity from "../../Assets/facebookTravelCity.svg";

export const Footer = () => {
  let now = new Date();
  let year = now.getFullYear();
  return (
    <>
      <Center pb="15px">
        <Link
          color="white"
          href="https://www.facebook.com/profile.php?id=61555232930916"
          isExternal
        >
          <Image src={facebookTravelCity} />
        </Link>
      </Center>
      <Center pb="15px">
        <Link color="white" href="/">
          Inicio
        </Link>
      </Center>
      <Center pb="15px">
        <Link color="white" href="/form">
          Contacto
        </Link>
      </Center>
      <Center pb="15px">
        <Link color="white" href="/term">
          Términos y condiciones
        </Link>
      </Center>
      <Center pb="10px">
        <Text color="gray.300" fontSize="0.875rem" pl="0.5rem">
          &copy; {year} Todos los Derechos Reservados
        </Text>
      </Center>
    </>
  );
};
