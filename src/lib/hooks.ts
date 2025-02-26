import { GameContext } from "@/context/game-context-provider";

import { useContext } from "react";

export function useGameContext() {
  console.log("useGameContext");
  const context = useContext(GameContext);
  console.log("GameContext:", context);

  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }

  return context;
}
