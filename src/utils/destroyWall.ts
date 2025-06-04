import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";

// Function to destroy (remove) a wall in the grid with animation
// grid: the grid of tiles
// row, col: coordinates of the wall to destroy
// isRight: if true, destroy the wall to the right; otherwise, destroy below
// speed: animation speed
export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType
) => {
  // If isRight is true and the right neighbor exists, destroy the right wall
  if (isRight && grid[row][col + 1]) {
    grid[row][col + 1].isWall = false;
    document.getElementById(`${row}-${col + 1}`)!.className = TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  } 
  // Otherwise, if the tile below exists, destroy the bottom wall
  else if (grid[row + 1]) {
    grid[row + 1][col].isWall = false;
    document.getElementById(`${row + 1}-${col}`)!.className = TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  } 
  // If neither, just remove the wall at the current tile
  else {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  }
};
