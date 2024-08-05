import React, { useState } from "react";
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
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { format } from "date-fns";
import { MdEventNote } from "react-icons/md";

export function AddCalendar() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formattedDate = format(date, "dd/MM/yyyy"); // Formato de fecha dd/MM/yyyy
      const timestamp = Date.now(); // Marca de tiempo actual
      await db.collection("events").doc(timestamp.toString()).set({
        date: formattedDate,
        time,
        description,
      });
      setSuccess(true);
      setDate(new Date());
      setTime("10:00");
      setDescription("");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false); // Ocultar el spinner después de enviar
      setTimeout(() => setSuccess(false), 3000);
      setError(false);
    }
  };
  /*
  return (
    <>
      <Header />
      <Box
        maxWidth="600px"
        mx="auto"
        p="5"
        //  borderWidth="1px"
        //  borderRadius="lg"
        //  boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb="4" mt="100">
            <FormLabel>Fecha:</FormLabel>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              customInput={<Input />}
              dateFormat="dd/MM/yyyy" // Formato de visualización del DatePicker
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Hora:</FormLabel>
            <TimePicker onChange={setTime} value={time} />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Descripción:</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full">
            Agregar Evento
          </Button>
        </form>
      </Box>
    </>
  );
}
  */

  return (
    <>
      <Header />
      <Center>
        <Stack w="550px" pt={20}>
          <Center pb={5} fontSize={20} fontWeight={"bold"}>
            <MdEventNote />
            <Box mx={4}> Agregar Evento</Box>
          </Center>

          <Stack direction="column" spacing={3}>
            <form onSubmit={handleSubmit}>
              <FormControl mb="4">
                <FormLabel>Fecha:</FormLabel>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  customInput={<Input />}
                  dateFormat="dd/MM/yyyy" // Formato de visualización del DatePicker
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>Hora:</FormLabel>
                <TimePicker
                  onChange={setTime}
                  value={time}
                  clearIcon={null} // Elimina el ícono de borrar
                  clockIcon={null} // Elimina el ícono del reloj
                  className="custom-time-picker"
                  //format="HH:mm"
                  // Puedes aplicar estilos directamente aquí o mediante CSS
                  //  style={{ width: '100%', border: 'none', boxSizing: 'border-box' }}
                  style={{
                    width: "100%",
                    border: "none",
                    boxSizing: "border-box",
                    // fontSize: '55', // Tamaño de fuente para el control del TimePicker
                    padding: "0.5rem",
                  }}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>Descripción:</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>

              <Button
                fontSize={"sm"}
                fontWeight={600}
                colorScheme="teal"
                variant="solid"
                w="100%"
                type="submit"
              >
                Agregar
              </Button>
            </form>
            {loading && (
              <Center mt={4}>
                <Spinner size="lg" color="teal.500" />
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
        </Stack>
      </Center>
    </>
  );
}
