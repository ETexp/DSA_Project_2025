export type AlgorithmType = 'Dijkstra' | 'A*' | 'BFS' | 'DFS';

export type MazeType ="NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isTraversed: boolean;
    isPath: boolean;
    distance: number;
    parent: TileType | null;
};

export type GridType = TileType[][];