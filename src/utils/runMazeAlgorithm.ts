import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import recursiveDivision from "../lib/algorithms/maze/recursiveDivision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import { constructBorder } from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

// Function to run the selected maze generation algorithm on the grid
export const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: {
  maze: MazeType;                        // The maze algorithm to use
  grid: GridType;                        // The grid of tiles
  startTile: TileType;                   // The start tile
  endTile: TileType;                     // The end tile
  setIsDisabled: (isDisabled: boolean) => void; // Function to disable/enable controls
  speed: SpeedType;                      // Animation speed
}) => {
  // If the selected maze is Binary Tree, run the binaryTree algorithm
  if (maze == "BINARY_TREE") {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  } 
  // If the selected maze is Recursive Division, run the recursiveDivision algorithm
  else if (maze === "RECURSIVE_DIVISION") {
    // Get the current speed value from the SPEEDS array
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;
    // Construct the border walls before running the recursive division
    await constructBorder(grid, startTile, endTile);
    // Run the recursive division algorithm with the specified parameters
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor((MAX_ROWS - 1) / 2),
      width: Math.floor((MAX_COLS - 1) / 2),
      setIsDisabled,
      speed,
    });
    // Re-enable controls after a delay based on speed
    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
};
