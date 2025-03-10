import { HStack, Image, space, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
          alt="Game Hub Logo"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
