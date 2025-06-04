import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

// Interface defining the shape of the context state and setters
interface PathfindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

// Create the context with the defined interface, initially undefined
export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

// Provider component to wrap the app and provide pathfinding state
export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  // State for selected algorithm
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  // State for selected maze type
  const [maze, setMaze] = useState<MazeType>("NONE");
  // State for the grid, initialized with start and end tile configs
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  // State to track if the graph/path is currently visualized
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  // Provide all state and setters to children via context
  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
