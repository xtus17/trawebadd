import React from "react";
import {
  Box,
  Center,
  Text,
  Link,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { Footer } from "../Landing/Footer";

const GlobalStyle = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#152939",
        color: "white",
      },
    },
  },
});

export function Term() {
  return (
    <ChakraProvider theme={GlobalStyle}>
      <Center pt={35}>
        <Text fontWeight="bold" fontSize={50}>
          Términos y Condiciones de Uso
        </Text>
      </Center>
      <br />
      <br />
      <Box pr={40} pl={40} pb={100}>
        <Box>
          Los Términos y Condiciones rigen al usar esta aplicación. Al
          registrarse, confirma que usted es mayor de 18 años y haber leído y
          aceptado estos términos y condiciones, así como el tratamiento de
          datos personales que realiza esta aplicación y que está contenido en
          nuestra política de privacidad.
        </Box>
        <br />
        <br />
        <Box>
          TravelCity proporciona a los viajeros acceso rápido a detalles
          locales, promoviendo una exploración más informada y cómoda durante
          sus aventuras. TravelCity ofrece funcionalidades como la búsqueda de
          lugares , información sobre atracciones turísticas, rutas sugeridas,
          recomendaciones de restaurantes, mapas y notificaciones relevantes.
        </Box>
        <br />
        <br />
        <Box display="flex" justifyContent="center">
          Al aceptar los Términos y Condiciones, el usuario reconoce que en
          cualquier momento TravelCity puede interrumpir, desactivar o cancelar
          sus servicios y el acceso a los mismos. TravelCity es una aplicación
          que se ha desarrollado con los máximos estándares de buenas prácticas
          en desarrollo de software y testing; sin embargo, no impide que
          sucedan errores al hacer uso de la aplicación, debiéndose reportar lo
          más antes posible. Queda totalmente prohibida la modificación,
          traducción, adaptación, edición o cualquier acto de ingeniería
          inversa, desmontaje o descompilación del código.
        </Box>
        <br />
        <br />
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Prohibiciones
          </Text>
        </Box>
        <br />
        <Box>
          Está totalmente prohibido el uso de esta aplicación con fines ilegales
          o inmorales, como se indica a continuación:
        </Box>
        <br />
        <Box>
          La publicación o propagación de contenidos que inciten a la violencia,
          la discriminación o la alteración del orden.
        </Box>
        <br />
        <Box>
          El mal uso de la aplicación de TravelCity para actitudes difamatorias,
          calumniosas o amenazas.
        </Box>
        <br />
        <Box> Utilizar la aplicación de TravelCity para fines comerciales.</Box>
        <br />
        <Box>
          Realizar cualquier acción que imponga o pueda imponer una carga
          desproporcionada a la infraestructura tecnológica.
        </Box>
        <br />
        <Box>
          Utilizar la aplicación con fines perjudiciales o que afecten a la
          usabilidad de otros usuarios.
        </Box>
        <br />
        <Box>
          Cualquier infracción de estas condiciones generales puede dar lugar a
          acciones judiciales o extrajudiciales que correspondan contra el
          usuario.
        </Box>
        <br />
        <Box>Está prohibido compartir su contraseña o cuenta con terceros.</Box>
        <br />
        <br />
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Limitacion de Seguridad
          </Text>
        </Box>
        <br />
        <Box>
          Es responsabilidad de nuestros usuarios la seguridad y
          confidencialidad de su contraseña, así como la limitación del acceso a
          sus dispositivos.
        </Box>
        <br />
        <Box>
          La aplicación no reclama ningún derecho de propiedad sobre los
          contenidos que usted disponga a disposición a través de este servicio.
        </Box>
        <br />
        <br />
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Política de Privacidad
          </Text>
        </Box>
        <Box>Última Actualización: 26 de diciembre del 2023</Box>
        <br />
        <Box>
          Usamos sus datos personales para proporcionar y mejorar el Servicio.
          Al usar la aplicación TravelCity, acepta la recopilación y el uso de
          información de acuerdo con esta Política de privacidad.
        </Box>
        <br />
        <Box>
          TravelCity es una aplicación móvil de turismo y una herramienta
          diseñada para mejorar la experiencia de viaje de los usuarios ansiosos
          por la búsqueda de aventuras.
        </Box>
        <br />
        <Box>
          La aplicación de TravelCity recopila datos de la ubicación precisa
          (geolocalización) en segundo plano para georeferenciar los lugares
          turísticos más próximos y asegurar las mayores aventuras a tu
          alrededor. La aplicación deTravelCity no recopila ni envía información
          de la ubicación de nuestros usuarios cuando la aplicación está cerrada
          o no está en uso.
        </Box>
        <br />
        <Box>
          Si el usuario de la aplicación de TravelCity deniega el permiso a la
          ubicación (geolocalización) limitará la experiencia de la aplicación
          perdiéndose los mejores lugares a su alrededor.
        </Box>
        <br />
        <Box>
          La aplicación de TravelCity no revela información de nuestros usuarios
          de forma distinta a la expresada en esta política de privacidad.
        </Box>
        <br />
        <br />
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Privacidad de los niños
          </Text>
        </Box>
        <br />
        <Box>
          Nuestro Servicio no se dirige a ninguna persona menor de 13 años. No
          recopilamos a sabiendas información de identificación personal de
          ninguna persona menor de 13 años. Si usted es padre o tutor y sabe que
          su hijo nos ha proporcionado Datos personales, por favor Contáctenos.
          Si nos damos cuenta de que hemos recopilado Datos personales de
          cualquier persona menor de 13 años sin verificación del consentimiento
          de los padres, tomamos medidas para eliminar esa información de
          Nuestros servidores.
        </Box>
        <br />
        <br />
        <Box>
          <Text fontSize={25} fontWeight="bold">
            Contáctenos
          </Text>
        </Box>
        <br />
        <Box>
          Si tiene alguna pregunta sobre esta Política de privacidad, puede
          contactarnos por:{" "}
          <Link
            color="teal.300"
            href="https://www.facebook.com/profile.php?id=61555232930916"
            isExternal
          >
            Aquí
          </Link>
        </Box>
      </Box>

      <Footer />
    </ChakraProvider>
  );
}
