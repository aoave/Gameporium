import { HStack, Image, space, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" alt="Game Hub Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
