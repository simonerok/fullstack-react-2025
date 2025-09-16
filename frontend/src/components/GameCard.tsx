import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import React from "react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} height="200px" aspectRatio={{ 9: 16 }} rounded="md" alt="Game" />
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
