import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

//we export it to use it in useGames and GameCard
export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Fetching games (useGames hook)...");
    apiClient
      .get<GameResponse>("/games")
      .then((res) => {
        console.log("API response (useGames hook):", res);
        setGames(res.data.results);
        console.log("Games set (useGames hook):", res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        console.log("API error (useGames hook):", err);
      });
  }, []);

  return { games, error };
};

export default useGames;
