import { ReactNode, createContext, useState } from "react";
import { TileType } from "../utils/types";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

// Interface defining the shape of the tile context state and setters
interface TileContextInterface {
  startTile: TileType;
  setStartTile: (startTile: TileType) => void;
  endTile: TileType;
  setEndTile: (endTile: TileType) => void;
}

// Create the context for tile state, initially undefined
export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
);

// Provider component to wrap the app and provide start/end tile state
export const TileProvider = ({ children }: { children: ReactNode }) => {
  // State for the start tile, initialized from constants
  const [startTile, setStartTile] = useState<TileType>(
    START_TILE_CONFIGURATION
  );
  // State for the end tile, initialized from constants
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

  // Provide start/end tile state and setters to children via context
  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
