import { twMerge } from "tailwind-merge";
import { END_TILE_STYLE, PATH_TILE_STYLE, START_TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE, TILE_STYLE, MAX_ROWS } from "../utils/constant";

interface MouseFunction{
    (row: number, col: number): void;
}
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
    handMouseEnter,
}:{
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isTraversed: boolean;
    isWall: boolean;
    isPath: boolean;
    handleMouseDown: MouseFunction;
    handleMouseUp: MouseFunction;
    handMouseEnter: MouseFunction;
}) {
    let tileTypeStyle;

    if (isStart) {
        tileTypeStyle = START_TILE_STYLE
    }else if (isEnd) {
        tileTypeStyle = END_TILE_STYLE
    }else if (isWall) {
        tileTypeStyle = WALL_TILE_STYLE
    }else if (isPath) {
        tileTypeStyle = PATH_TILE_STYLE
    }else if (isTraversed) {
        tileTypeStyle = TRAVERSED_TILE_STYLE
    } else {
        tileTypeStyle = TILE_STYLE;
    }
    const borderStyle = row == MAX_ROWS - 1 ? 'border-b' : col === 0 ? 'border-l' : '';
    const edgeStyle =row == MAX_ROWS - 1 && col === 0 ? 'border-b border-l' : '';

    return (
        <div className={twMerge(
            tileTypeStyle,
            borderStyle,
            edgeStyle,
            
        )} id={`${row}-${col}`} 
                onMouseDown={() => handleMouseDown(row, col)}
                onMouseUp={() => handleMouseUp(row, col)}
                onMouseEnter={() => handMouseEnter(row, col)}
        />
    );
}