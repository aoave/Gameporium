import { HStack, Image, space, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" alt="Game Hub Logo" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
