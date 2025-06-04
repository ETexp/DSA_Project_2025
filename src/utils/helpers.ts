import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

// Helper function to create a single row of tiles for the grid
const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = [];
  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,         // Mark as end tile if matches endTile position
      isWall: false,                                             // Default: not a wall
      isPath: false,                                             // Default: not part of path
      distance: Infinity,                                        // Default distance for pathfinding
      isStart: row === startTile.row && col === startTile.col,   // Mark as start tile if matches startTile position
      isTraversed: false,                                        // Default: not traversed
      parent: null,                                              // No parent initially
    });
  }
  return currentRow;
};

// Helper function to create the entire grid as a 2D array of tiles
export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }
  return grid;
};

// Check if a given row/col is the start or end tile (hardcoded positions)
export const checkIfStartOrEnd = (row: number, col: number) => {
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  );
};

// Create a new grid with the wall state toggled at the given row/col
export const createNewGrid = (grid: GridType, row: number, col: number) => {
  const newGrid = grid.slice();
  const newTile = {
    ...newGrid[row][col],
    isWall: !newGrid[row][col].isWall,
  };

  newGrid[row][col] = newTile;
  return newGrid;
};

// Check if two tiles are at the same position
export const isEqual = (a: TileType, b: TileType) => {
  return a.row === b.row && a.col === b.col;
};

// Check if a row/col matches a tile's position
export const isRowColEqual = (row: number, col: number, tile: TileType) => {
  return row === tile.row && col === tile.col;
};

// Sleep helper for async delays (used in animations)
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Get a random integer between min (inclusive) and max (exclusive)
export const getRandInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// Check if a tile exists in a stack (array) of tiles
export const checkStack = (tile: TileType, stack: TileType[]) => {
  for (let i = 0; i < stack.length; i++) {
    if (isEqual(stack[i], tile)) return true;
  }
  return false;
};

// Remove a tile from a queue (array) if it exists
export const dropFromQueue = (tile: TileType, queue: TileType[]) => {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) {
      queue.splice(i, 1);
      break;
    }
  }
};
