import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

// Custom hook to access the pathfinding context
export const usePathfinding = () => {
  // Get the context value
  const context = useContext(PathfindingContext);

  // Throw an error if the hook is used outside the provider
  if (!context) {
    throw new Error("usePathfinding must be used within a PathfindingProvider");
  }

  // Return the context value (state and setters)
  return context;
};
