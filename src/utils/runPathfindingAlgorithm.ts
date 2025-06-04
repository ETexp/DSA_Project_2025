
import { bfs } from "../lib/algorithms/pathfinding/bfs";
import { dfs } from "../lib/algorithms/pathfinding/dfs";
import { dijkstra } from "../lib/algorithms/pathfinding/dijkstra";
import { AlgorithmType, GridType, TileType } from "./types";

// Function to run the selected pathfinding algorithm on the grid
export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType; // The algorithm to use (BFS, DFS, DIJKSTRA, A_STAR)
  grid: GridType;           // The grid of tiles
  startTile: TileType;      // The start tile
  endTile: TileType;        // The end tile
}) => {
  // Select and run the appropriate algorithm based on the input
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);         // Run Breadth-First Search
    case "DFS":
      return dfs(grid, startTile, endTile);         // Run Depth-First Search
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);    // Run Dijkstra's algorithm
    default:
      return bfs(grid, startTile, endTile);         // Default to BFS if unknown
  }
};
