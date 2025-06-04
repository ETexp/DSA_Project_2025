import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext"
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { useRef } from "react";


function App() {
 const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
        <div className="h-screen w-screen flex flex-col">
          <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
        </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App
