import {
  EXTENDED_SLEEP_TIME,
  PATH_TILE_STYLE,
  SLEEP_TIME,
  SPEEDS,
  TRAVERSED_TILE_STYLE,
} from "./constants";
import { isEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

// Function to animate the traversal and final path on the grid
// traversedTiles: tiles visited during search
// path: tiles that form the shortest path
// startTile, endTile: positions to avoid animating
// speed: animation speed
export const animatePath = (
  traversedTiles: TileType[],
  path: TileType[],
  startTile: TileType,
  endTile: TileType,
  speed: SpeedType
) => {
  // Animate the traversal of each tile (visited order)
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(() => {
      const tile = traversedTiles[i];
      // Skip animating the start and end tiles
      if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
        document.getElementById(
          `${tile.row}-${tile.col}`
        )!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
      }
    }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on speed
  }

  // After traversal animation, animate the shortest path
  setTimeout(() => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const tile = path[i];
        // Skip animating the start and end tiles
        if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
          document.getElementById(
            `${tile.row}-${tile.col}`
          )!.className = `${PATH_TILE_STYLE} animate-path`;
        }
      }, EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on speed
    }
  }, SLEEP_TIME * traversedTiles.length * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on the total traversal time
};
