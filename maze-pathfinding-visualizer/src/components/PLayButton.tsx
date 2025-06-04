export function PlayButton({
    handleRunVisualizer,
    isDisabled,
    isGraphVisualized,

}:{
    isDisabled: boolean;
    handleRunVisualizer: () => void;
    isGraphVisualized: boolean;
}){
    return (
        <button 
            disabled ={isDisabled}
            onClick ={handleRunVisualizer}
            className = "disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green hober:bg-green-600 border-none active:ring-green-399 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacaity=30"
    )
}
