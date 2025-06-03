import { use } from "react"
import { PathfindingContext } from "../context/PathfindingContext";

export const usePathfinding = () => {
    const context = use(PathfindingContext);

    if (!context) {
        throw new Error("usePathfinding must be used within a PathfindingProvider");
    }
    return context;
}