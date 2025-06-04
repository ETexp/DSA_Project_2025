import {
  END_TILE_CONFIGURATION,
  MAX_COLS,
  MAX_ROWS,
  START_TILE_CONFIGURATION,
  TILE_STYLE,
} from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

// Function to reset the grid to its initial state (removes walls, paths, traversal, etc.)
export const resetGrid = ({
  grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION,
}: {
  grid: GridType;
  startTile?: TileType;
  endTile?: TileType;
}) => {
  // Loop through every tile in the grid
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];
      // Reset tile properties to initial state
      tile.distance = Infinity;
      tile.isTraversed = false;
      tile.isPath = false;
      tile.parent = null;
      tile.isWall = false;

      // Skip updating the start and end tiles' DOM classes
      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.col}`);

        // Reset the tile's CSS class to the default style
        if (tileElement) {
          tileElement.className = TILE_STYLE;
        }

        // Add border classes for edge tiles
        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add("border-b");
        }

        if (tile.col === 0) {
          tileElement?.classList.add("border-l");
        }
      }
    }
  }
};
