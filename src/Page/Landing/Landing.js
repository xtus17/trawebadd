import React from "react";
import { Hero } from "./Hero";
import { Body } from "./Body";
import { BodySecond } from "./BodySecond";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";

export function Landing() {
  return (
    <>
      <Hero />
      <Body />
      <BodySecond />

      <Box
      //  position="absolute"
      color="white"
      width="100%"
      p={8}
      textAlign="center"
    >
      <Box pt={{ base: "1450px", md: "780px" }}>
</Box>
</Box>

      <Footer />
    </>
  );
}
