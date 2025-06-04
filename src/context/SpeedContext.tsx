import { createContext, useState } from "react";
import { SpeedType } from "../utils/types";

// Interface defining the shape of the speed context state and setter
interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

// Create the context for speed, initially undefined
export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);

// Provider component to wrap the app and provide speed state
export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  // State for the current animation speed, default is 0.5
  const [speed, setSpeed] = useState<SpeedType>(0.5);

  // Provide speed state and setter to children via context
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
