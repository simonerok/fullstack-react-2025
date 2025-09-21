import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack p={4} justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Spacer />
      {/* Spacer makes it possible to push the switch */}
      <ColorModeSwitch /> {/* handles dark mode */}
    </HStack>
  );
};
