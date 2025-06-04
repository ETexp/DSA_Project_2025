import { MAX_COLS, MAX_ROWS, SLEEP_TIME, WALL_TILE_STYLE } from "./constants";
import { isEqual, sleep } from "./helpers";
import { GridType, TileType } from "./types";

// Function to construct (animate) the border walls around the grid
// grid: the grid of tiles
// startTile, endTile: positions to avoid placing walls
export async function constructBorder(
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) {
  // Directions to traverse the border: right, down, left, up
  const shape = [
    { row: 0, col: 1 },   // Move right
    { row: 1, col: 0 },   // Move down
    { row: 0, col: -1 },  // Move left
    { row: -1, col: 0 },  // Move up
  ];

  let row = 0;
  let col = 0;

  // Loop through each direction to trace the border
  for (let i = 0; i < 4; i++) {
    const direction = shape[i];

    // Move in the current direction until reaching the grid edge
    while (
      row + direction.row >= 0 &&
      row + direction.row < MAX_ROWS &&
      col + direction.col >= 0 &&
      col + direction.col < MAX_COLS
    ) {
      row += direction.row;
      col += direction.col;

      // Only set wall if not the start or end tile
      if (
        !isEqual(grid[row][col], startTile) &&
        !isEqual(grid[row][col], endTile)
      ) {
        grid[row][col].isWall = true;
        const tileElement = document.getElementById(`${row}-${col}`);
        if (tileElement) {
          tileElement.classList.add(
            ...WALL_TILE_STYLE.split(" "),
            "animate-wall"
          );
        }
        // Wait for animation effect
        await sleep(SLEEP_TIME);
      }
    }

    // Clamp row and col to stay within grid bounds after each edge
    if (row < 0) row = 0;
    if (row >= MAX_ROWS) row = MAX_ROWS - 1;
    if (col < 0) col = 0;
    if (col >= MAX_COLS) col = MAX_COLS - 1;
  }
}
