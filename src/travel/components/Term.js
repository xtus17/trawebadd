import React from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import { Footer } from "./Footer";

export function Term() {
  return (
    <>
      <Box py={10} px={{ base: 6, md: 20 }} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          TÉRMINOS Y CONDICIONES DE USO
        </Text>
        <Text fontSize="sm" color="gray.500" mt={2}>
          Última Actualización: 28 de septiembre del 2025
        </Text>
      </Box>

      {/* Introducción */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text>
          Bienvenido a <b>Travel City</b>, una aplicación diseñada para ofrecer
          información sobre lugares turísticos, así como permitir a los usuarios
          compartir comentarios y reseñas. Al registrarse y usar esta
          aplicación, usted confirma que es mayor de 18 años y que ha leído,
          entendido y aceptado los presentes Términos y Condiciones de Uso.
        </Text>
      </Box>

      {/* 1. Uso de la aplicación */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">1. Uso de la Aplicación</Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            Travel City es una plataforma informativa sobre lugares turísticos.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            Los usuarios pueden consultar información y publicar comentarios o
            reseñas.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            No se permite realizar reservas, compras ni transacciones
            comerciales dentro de la aplicación.
          </ListItem>
        </List>
      </Box>

      {/* 2. Registro y Cuenta */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">2. Registro y Cuenta</Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            El usuario debe crear una cuenta con un correo electrónico válido.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            El usuario es responsable de la seguridad y confidencialidad de sus
            credenciales.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            Está prohibido compartir la cuenta con terceros.
          </ListItem>
        </List>
      </Box>

      {/* 3. Prohibiciones */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">3. Prohibiciones</Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            Publicar comentarios que inciten a la violencia, discriminación u
            odio.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            Difundir información falsa o difamatoria.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            Realizar spam o publicidad no autorizada.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            Alterar la seguridad o funcionamiento de la aplicación.
          </ListItem>
        </List>
      </Box>

      {/* 4. Limitación */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">4. Limitación de Responsabilidad</Text>
        <Text mt={2}>
          Travel City brinda información de carácter orientativo y no garantiza
          la exactitud o disponibilidad total de los datos. El uso de la
          aplicación es responsabilidad exclusiva del usuario.
        </Text>
      </Box>

      {/* 5. Derechos */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">5. Derechos de Contenido</Text>
        <Text mt={2}>
          Los comentarios publicados son responsabilidad de quien los emite. Al
          compartir contenido, el usuario concede a Travel City un derecho
          limitado para mostrarlo dentro de la aplicación.
        </Text>
      </Box>

      <Divider my={10} />

      {/* Política de Privacidad */}
      <Box py={10} px={{ base: 6, md: 20 }} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          POLÍTICA DE PRIVACIDAD – Travel City
        </Text>
        <Text fontSize="sm" color="gray.500" mt={2}>
          Última Actualización: 28 de septiembre del 2025
        </Text>
      </Box>

      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text>
          En <b>Travel City</b> valoramos su privacidad. Esta política describe
          cómo recopilamos, usamos y protegemos su información personal.
        </Text>
      </Box>

      {/* 1. Datos recopilados */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">1. Datos Recopilados</Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaInfoCircle} color="blue" />
            Correo electrónico: usado solo para registro y autenticación.
          </ListItem>
          <ListItem>
            <ListIcon as={FaInfoCircle} color="blue" />
            Comentarios y reseñas: asociados al perfil del usuario.
          </ListItem>
          <ListItem>
            <ListIcon as={FaExclamationTriangle} color="red" />
            No recopilamos ubicación en tiempo real ni datos sensibles.
          </ListItem>
        </List>
      </Box>

      {/* 2. Uso de la información */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">2. Uso de la Información</Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            Gestionar el acceso y uso de la aplicación.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            Permitir la publicación de reseñas y comentarios.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green" />
            Mejorar la calidad del servicio.
          </ListItem>
        </List>
      </Box>

      {/* 3. Privacidad niños */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">3. Privacidad de los Niños</Text>
        <Text mt={2}>
          Nuestro servicio no está dirigido a menores de 18 años. No recopilamos
          información de manera intencional de personas que no cumplan este
          requisito.
        </Text>
      </Box>

      {/* 4. Seguridad */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">4. Seguridad de la Información</Text>
        <Text mt={2}>
          Implementamos medidas razonables de protección, aunque ningún sistema
          es 100% seguro. No garantizamos la seguridad absoluta de los datos
          transmitidos en internet.
        </Text>
      </Box>

      {/* 5. Contacto */}
      <Box py={5} px={{ base: 6, md: 20 }}>
        <Text fontWeight="bold">5. Contacto</Text>
        <Text mt={2}>
          Para consultas sobre estos términos o la política de privacidad puede
          escribirnos a:{" "}
          <b>
            <i>📧 xaler.net.pe</i>
          </b>
        </Text>
      </Box>

      <Footer />
    </>
  );
}

