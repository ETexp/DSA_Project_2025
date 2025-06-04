// Import React hooks and required utilities/components
import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { Select } from "./Select";
import { useSpeed } from "../hooks/useSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { PlayButton } from "./PlayButton";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";

// Navigation bar component for controlling the visualizer
export function Nav({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  // State to disable controls during animations
  const [isDisabled, setIsDisabled] = useState(false);

  // Get grid and algorithm state from custom hooks
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathfinding();

  // Get start and end tile positions
  const { startTile, endTile } = useTile();

  // Get and set animation speed
  const { speed, setSpeed } = useSpeed();

  // Handle maze generation selection
  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    // Run the selected maze generation algorithm
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
    // Update grid state after maze generation
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  // Handle running the pathfinding visualizer
  const handlerRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }

    // Run the selected pathfinding algorithm
    const { traversedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    // Animate the traversal and path
    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    // Re-enable controls after animation completes
    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsGraphVisualized(true);
      setIsDisabled(false);
      isVisualizationRunningRef.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
  };

  // Render the navigation bar with controls
  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        {/* App title, visible on large screens */}
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        {/* Controls for maze, algorithm, speed, and play button */}
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            isDisabled={isDisabled}
            onChange={(e) => {
              handleGenerateMaze(e.target.value as MazeType);
            }}
          />
          <Select
            label="Graph"
            value={algorithm}
            isDisabled={isDisabled}
            options={PATHFINDING_ALGORITHMS}
            onChange={(e) => {
              setAlgorithm(e.target.value as AlgorithmType);
            }}
          />
          <Select
            label="Speed"
            value={speed}
            options={SPEEDS}
            isDisabled={isDisabled}
            onChange={(e) => {
              setSpeed(parseInt(e.target.value) as SpeedType);
            }}
          />
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handlerRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
}
