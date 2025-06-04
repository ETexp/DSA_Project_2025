import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

// PlayButton component renders a button to start or reset the visualization
export function PlayButton({
  handlerRunVisualizer,      // Function to handle button click (start/reset)
  isDisabled,                // Whether the button is disabled
  isGraphVisualized,         // Whether the graph/path is currently visualized
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled} // Disable button if animation is running
      onClick={handlerRunVisualizer} // Run handler on click
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30"
    >
      {/* Show reset icon if graph is visualized, otherwise show play icon */}
      {isGraphVisualized ? (
        <GrPowerReset className="w-5 h-5" />
      ) : (
        <BsFillPlayFill className="w-5 h-5" />
      )}
    </button>
  );
}
