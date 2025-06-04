import { useContext } from "react";
import { TileContext } from "../context/TileContext";

// Custom hook to access the tile context (start and end tile state)
export const useTile = () => {
  // Get the context value
  const context = useContext(TileContext);

  // Throw an error if the hook is used outside the provider
  if (!context) {
    throw new Error("useTile must be used within a TileProvider");
  }

  // Return the context value (start/end tile state and setters)
  return context;
};
