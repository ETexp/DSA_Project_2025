import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

// Maximum number of rows and columns for the grid
export const MAX_ROWS = 39;
export const MAX_COLS = 49;

// Configuration object for the start tile (initial position and properties)
export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false, // Note: isStart is not used for rendering, position is used instead
  isTraversed: false,
  parent: null,
};

// Configuration object for the end tile (initial position and properties)
export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false, // Note: isEnd is not used for rendering, position is used instead
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

// CSS class strings for different tile states
export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

// List of available maze generation algorithms for selection
export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

// List of available pathfinding algorithms for selection
export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  
  { name: "Breath First Search", value: "BFS" },
  { name: "Depth First Search", value: "DFS" },
];

// List of available animation speeds for selection
export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];

// Timing constants for animation delays
export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;
