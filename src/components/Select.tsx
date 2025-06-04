import { ChangeEvent } from "react";

// Select component renders a labeled dropdown menu for choosing options
export function Select({
  value,                    // Current selected value
  onChange,                 // Handler for when selection changes
  options,                  // Array of option objects { value, name }
  label,                    // Label for the select input
  isDisabled,               // Whether the select is disabled
}: {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      {/* Label for the select input */}
      <label className="text-xs text-gray-300 ml-1" htmlFor={label}>
        {label}
      </label>
      {/* Dropdown select input */}
      <select
        disabled={isDisabled} // Disable select if isDisabled is true
        className="bg-gray-700 disabled:pointer-events-none rounded-md cursor-pointer hover:bg-gray-800 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {/* Render each option in the dropdown */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
