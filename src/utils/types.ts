// Define the possible algorithm types for pathfinding
export type AlgorithmType = "DIJKSTRA" |  "BFS" | "DFS";

// Interface for algorithm selection options in dropdowns
export interface AlgorithmSelectType {
  name: string;
  value: AlgorithmType;
}

// Define the possible maze generation types
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

// Interface for maze selection options in dropdowns
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

// Type definition for a single tile (cell) in the grid
export type TileType = {
  row: number;              // Row index of the tile
  col: number;              // Column index of the tile
  isEnd: boolean;           // Is this the end tile?
  isWall: boolean;          // Is this tile a wall?
  isPath: boolean;          // Is this tile part of the final path?
  distance: number;         // Distance value used in algorithms
  isTraversed: boolean;     // Has this tile been visited/traversed?
  isStart: boolean;         // Is this the start tile?
  parent: TileType | null;  // Reference to the parent tile (for path reconstruction)
};

// Type definition for the grid (2D array of tiles)
export type GridType = TileType[][];

// Define the possible speed values for animation
export type SpeedType = 2 | 1 | 0.5;

// Interface for speed selection options in dropdowns
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
