import { use } from "react"
import { TileContext } from "../context/TileContext";

export const useTiles = () => { 
    const context = use(TileContext);

    if (!context) {
        throw new Error("useTiles must be used within a TileProvider");
    }
    return context;
}