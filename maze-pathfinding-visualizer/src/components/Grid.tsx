import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import type { RefObject } from "react";
import { MAX_COLS, MAX_ROWS } from "../utils/constant";
import { Tile } from "./Tile";
import { useState } from "react";
import { checkIfStartOrEnd ,createNewGrid} from "../utils/helpers";

export function Grid({isVisualizationRunningRef}:{isVisualizationRunningRef: RefObject<boolean>}) {
  const { grid,setGrid } = usePathfinding();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = (row: number, col:number) => { 
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
    }
    setIsMouseDown(true);
    const newGrid = createNewGrid(grid,row,col);
    setGrid(newGrid);
  };
  const handleMouseUp = (row:number,col:number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
    }
    setIsMouseDown(false);
  }
  const handMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || !isMouseDown || checkIfStartOrEnd(row,col)) {
      return;
    }
    if (isMouseDown){
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    }
  };

  return (
    <div
      className={twMerge(
        // Base classes
        "flex items-center flex-col justify-center border-sky-300",
        // Control grid height
        `lg:min-h-[${MAX_ROWS * 17}] md:min-h-[${MAX_ROWS * 15}] xs:min-h-[${MAX_ROWS * 7}]`,
        // Control grid width
        `lg:min-w-[${MAX_COLS * 17}] md:min-w-[${MAX_COLS * 15}] xs:min-w-[${MAX_COLS * 7}]`,
    
    
    )}

    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isStart, isEnd, isTraversed, isWall, isPath } = tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isStart={isStart}
                isEnd={isEnd}
                isTraversed={isTraversed}
                isWall={isWall}
                isPath={isPath}
                handleMouseDown={() => handleMouseDown(tile.row, tile.col)}
                handleMouseUp={() => handleMouseUp(tile.row, tile.col)}
                handMouseEnter={() => handMouseEnter(tile.row, tile.col)} 
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
