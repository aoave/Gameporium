import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" alt="Game Hub Logo" />
      <Text fontSize="2xl">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
