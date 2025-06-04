import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

// Custom hook to access the speed context
export const useSpeed = () => {
  // Get the context value
  const context = useContext(SpeedContext);

  // Throw an error if the hook is used outside the provider
  if (!context) {
    throw new Error("useSpeed must be used within a SpeedProvider");
  }

  // Return the context value (speed state and setter)
  return context;
};
