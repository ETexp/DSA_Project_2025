import { isEqual } from "./helpers";
import { TileType } from "./types";

// Function to check if a tile is already present in the queue
export function isInQueue(tile: TileType, queue: TileType[]) {
  // Iterate through the queue and compare each tile
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true; // Return true if tile is found
  }
  return false; // Return false if tile is not found in the queue
}
