import { useQuery } from "@tanstack/react-query";

import gameService from "../services/gameService";

const useGame = (id: string) =>
  useQuery({
    queryKey: ["games", id],
    queryFn: () => (gameService as any).get(id),
  });

export default useGame;
