// Import utility to merge Tailwind CSS class names intelligently
import { twMerge } from "tailwind-merge";

// Import custom hook for grid state management
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

// Grid component renders the entire grid of tiles and handles mouse interactions
export function Grid({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
  // Get grid state and setter from custom hook
  const { grid, setGrid } = usePathfinding();
  // Track if mouse is currently pressed
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Handle mouse down event on a tile
  const handleMouseDown = (row: number, col: number) => {
    // Prevent interaction if visualization is running or tile is start/end
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    setIsMouseDown(true);
    // Create a new grid with updated wall at (row, col)
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  // Handle mouse up event on a tile
  const handleMouseUp = (row: number, col: number) => {
    // Prevent interaction if visualization is running or tile is start/end
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    setIsMouseDown(false);
  };

  // Handle mouse enter event on a tile (for drag-to-draw walls)
  const handleMouseEnter = (row: number, col: number) => {
    // Prevent interaction if visualization is running or tile is start/end
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    // Only update grid if mouse is pressed (dragging)
    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };

  // Render the grid as a set of rows and tiles
  return (
    <div
      className={twMerge(
        // Base classes for layout and border
        "flex items-center flex-col justify-center border-sky-300 mt-10",
        // Control Grid height based on number of rows
        `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        // Control Grid width based on number of columns
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {/* Render each row */}
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className="flex">
          {/* Render each tile in the row */}
          {r.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
              tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
                // Pass mouse event handlers to each tile
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseUp={() => handleMouseUp(row, col)}
                handleMouseEnter={() => handleMouseEnter(row, col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
