import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import React from "react";
import { MAX_ROWS } from "../utils/constant";



export function Grid() {
  const { grid } = usePathfinding();
  return (
    <div
      className={twMerge(
        // Base classes
        "flex items-center flex-col justify-center border-sky-300",
        // Control grid height
        `lg:min-h-[${MAX_ROWS * 17}] md:min-h-[${MAX_ROWS * 15}] xs:min-h-[${MAX_ROWS * 7}]`,
        // Control grid width
        `lg:min-w-[${MAX_ROWS * 17}] md:min-w-[${MAX_ROWS * 15}] xs:min-w-[${MAX_ROWS * 7}]`,
    
    
    )}

    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => (
            <div
              key={tileIndex}
              className="bg-white h-2 w-2 border"
            />
          ))}
        </div>
      ))}
    </div>
  );
}