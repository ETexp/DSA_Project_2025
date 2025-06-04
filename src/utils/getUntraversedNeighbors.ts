import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

// Function to get all untraversed neighboring tiles (up, down, left, right) for a given tile
export const getUntraversedNeighbors = (grid: GridType, tile: TileType) => {
  const { row, col } = tile;
  const neighbors = [];

  // Check the tile above (if not on the first row)
  if (row > 0) {
    neighbors.push(grid[row - 1][col]);
  }
  // Check the tile below (if not on the last row)
  if (row < MAX_ROWS - 1) {
    neighbors.push(grid[row + 1][col]);
  }
  // Check the tile to the left (if not on the first column)
  if (col > 0) {
    neighbors.push(grid[row][col - 1]);
  }
  // Check the tile to the right (if not on the last column)
  if (col < MAX_COLS - 1) {
    neighbors.push(grid[row][col + 1]);
  }
  // Return only neighbors that have not been traversed yet
  return neighbors.filter((neighbor) => !neighbor.isTraversed);
};
