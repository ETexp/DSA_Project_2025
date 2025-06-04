import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

// Type definition for mouse event handler functions
interface MouseFunction {
  (row: number, col: number): void;
}

// Tile component represents a single cell in the grid
export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) {
  // Determine the style for the tile based on its state
  let tileTyleStyle;

  if (isStart) {
    tileTyleStyle = START_TILE_STYLE; // Style for start tile
  } else if (isEnd) {
    tileTyleStyle = END_TILE_STYLE; // Style for end tile
  } else if (isWall) {
    tileTyleStyle = WALL_TILE_STYLE; // Style for wall tile
  } else if (isPath) {
    tileTyleStyle = PATH_TILE_STYLE; // Style for path tile
  } else if (isTraversed) {
    tileTyleStyle = TRAVERSED_TILE_STYLE; // Style for traversed tile
  } else {
    tileTyleStyle = TILE_STYLE; // Default style
  }

  // Add border styles for edge tiles
  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileTyleStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)} // Handle mouse down event
      onMouseUp={() => handleMouseUp(row, col)} // Handle mouse up event
      onMouseEnter={() => handleMouseEnter(row, col)} // Handle mouse enter event
    />
  );
}
