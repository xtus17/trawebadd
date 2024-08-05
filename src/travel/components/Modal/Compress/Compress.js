import React, { useState } from "react";
import { Header } from "./../../Header";
import { Stack, Center, Box, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { Link, Icon } from "@chakra-ui/react";

export function Compress() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "wvdro59z");
    data.append("cloud_name", "dn2vjqp97");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dn2vjqp97/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      setSuccess(true);
      const result = await response.json();
      const imageUrl = `${result.url.replace("/upload/", "/upload/q_60/")}`;
      setUrl(imageUrl);
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => setSuccess(false), 3000);
      setError(false);
    }
  };

  return (
    <>
      <Header />

      <Center>
        <Stack pt={20}>
          <Center pb={5} fontSize={20} fontWeight={"bold"}>
            <FaCompressArrowsAlt />
            <Box mx={4}>Comprimir Imágenes</Box>
          </Center>

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <br />

          <Button
            fontSize={"sm"}
            fontWeight={600}
            colorScheme="teal"
            variant="solid"
            w="100%"
            onClick={uploadImage}
          >
            Comprimir
          </Button>

          <br />
          <br />

          {url && (
            <Center>
              <Link href={url} isExternal>
                <Icon as={FaImage} boxSize={6} />
              </Link>
            </Center>
          )}

          {success && (
            <Stack spacing={3} mt={4}>
              <Alert status="success" variant="solid">
                <AlertIcon />
                Agregado con éxito
              </Alert>
            </Stack>
          )}

          {error && (
            <Stack spacing={3} mt={4}>
              <Alert status="error">
                <AlertIcon />
                Sucedió un error
              </Alert>
            </Stack>
          )}
        </Stack>
      </Center>
    </>
  );
}
