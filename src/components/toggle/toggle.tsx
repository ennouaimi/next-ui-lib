import React, { useState } from "react";

type ToggleWrapperProps = {
  color?: "lightBlue" | "amber" | "cyan";
};

const ToggleWrapper: React.FC<ToggleWrapperProps> = ({
  color = "lightBlue",
}) => {
  const [isOn, setIsOn] = useState(false);

  const colorClasses = {
    lightBlue: "bg-blue-500",
    amber: "bg-amber-500",
    cyan: "bg-cyan-500",
  };

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOn(event.target.checked);
  };

  return (
    <div className="inline-block relative w-12 h-6">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="absolute opacity-0 w-0 h-0"
        id={`react-switch-${color}`}
        type="checkbox"
      />
      <label
        className={`block overflow-hidden h-6 rounded-full cursor-pointer bg-gray-300`}
        htmlFor={`react-switch-${color}`}
      >
        <span
          className={`block h-6 w-6 rounded-full shadow transform transition-transform duration-200 ${
            isOn ? `translate-x-full ${colorClasses[color]}` : "bg-white"
          }`}
        />
      </label>
    </div>
  );
};

export { ToggleWrapper as Toggle };
