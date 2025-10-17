import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInout";

interface Props {
  onSearch: (searchText: string | null) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={4} justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <Text></Text>
      <Spacer />
      {/* Spacer makes it possible to push the switch */}
      <ColorModeSwitch /> {/* handles dark mode */}
    </HStack>
  );
};
