import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import type { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const platforms: Platform[] = [
  { id: 4, name: "PC", slug: "pc" },
  { id: 187, name: "PlayStation", slug: "playstation" },
  { id: 1, name: "Xbox", slug: "xbox" },
  { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" },
  // ...add more as needed
];

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform ? selectedPlatform.name : "Select Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>Clear</MenuItem>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
