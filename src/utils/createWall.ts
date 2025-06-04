import { MAX_COLS, MAX_ROWS, SPEEDS, WALL_TILE_STYLE } from "./constants";
import { isRowColEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

// Function to create (animate) walls on the grid for maze generation
// startTile, endTile: positions to avoid placing walls
// speed: animation speed
export const createWall = (
  startTile: TileType,
  endTile: TileType,
  speed: SpeedType
) => {
  // Calculate delay for animation based on speed
  const delay = 6 * SPEEDS.find((s) => s.value === speed)!.value - 1;

  // Loop through each row in the grid
  for (let row = 0; row < MAX_ROWS; row++) {
    setTimeout(() => {
      // Loop through each column in the current row
      for (let col = 0; col < MAX_COLS; col++) {
        // Only place walls on even rows or columns (maze structure)
        if (row % 2 === 0 || col % 2 === 0) {
          // Skip the start and end tile positions
          if (
            !isRowColEqual(row, col, startTile) &&
            !isRowColEqual(row, col, endTile)
          ) {
            // Animate wall creation with a delay based on column
            setTimeout(() => {
              document.getElementById(
                `${row}-${col}`
              )!.className = `${WALL_TILE_STYLE} animate-wall`;
            }, delay * col);
          }
        }
      }
    }, delay * (MAX_ROWS / 2) * row); // Stagger rows for animation effect
  }
};
