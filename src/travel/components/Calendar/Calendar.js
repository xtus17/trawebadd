import React, { useState, useEffect } from "react";
import { Header } from "../Header";
import { db } from "../../firebase";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Center,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  Box,
  useColorModeValue,
  Tooltip,
  SimpleGrid,
  HStack,
  Table,
  Tbody,
  Tr,
  Td,
  Flex,
} from "@chakra-ui/react";
import { MdEventNote } from "react-icons/md";
import { FaPen, FaGlobe, FaTrash, FaPaperclip } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { ModalDelete } from "./Modal/ModalDelete";

export function Calendar() {
  const [data, setData] = useState([]);
  const [eliminar, setEliminar] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const getData = () => {
    db.collection("events").onSnapshot((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id });
      });
      setData(array);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Header />

      <ModalDelete
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        eliminar={eliminar}
      />

      <HStack mb={35} pt={25} pb={6} px={10}></HStack>

      <HStack pt={5} pb={2} px={2}>
        <Table bg={useColorModeValue("#CED8E2", "#22394A")}>
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha y Hora</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <Tbody>
            {data.map((datas, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>
                  {datas.date} {datas.time}
                </Td>
                <Td>{datas.description}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Tooltip label="Eliminar" placement="top">
                      <Box>
                        <Button
                          size="sm"
                          color="white"
                          bg="red"
                          onClick={() => {
                            setOpenModalDelete(true);
                            setEliminar(datas);
                          }}
                        >
                          <FaTrash />
                        </Button>
                      </Box>
                    </Tooltip>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </HStack>
    </Box>
  );
}
