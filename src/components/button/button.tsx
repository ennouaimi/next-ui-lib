import { buttonColors } from "../../constants/colors";
import React from "react";

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  color?: { text: string; value: string; dark: string };
  size?: "small" | "medium" | "large" | "full";
  variant?: "filled" | "outline";
  isLoading?: boolean;
}

const Button = ({
  color = buttonColors.Primary,
  onClick,
  label,
  size = "medium",
  variant = "filled",
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-4 h-6 text-base !rounded-[15px]",
    large: "px-8 py-3 text-2xl !rounded-[25px]",
    full: "px-8 py-2 text-xl w-full",
  };

  return (
    <button
      className={`relative flex items-center justify-center text-white rounded-[8px] cursor-pointer hover:bg-primaryHover transition duration-150 ease-in-out whitespace-nowrap active:translate-y-[4px] ${
        sizeClasses[size]
      } ${
        variant === "outline"
          ? `text-${color.text} border-2 border-${color.text} hover:bg-${color.text}-100`
          : `bg-${color.value} text-white hover:bg-${color.value}-hover`
      }`}
      style={{
        backgroundColor: color.value,
        boxShadow: `0 ${size === "large" ? "6px" : "4px"} 0 ${color.dark}`,
        color: color.text,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 0 ${color.dark}`;
      }}
      onClick={onClick}
    >
      <p className="font-gabaritoBold">{label}</p>
    </button>
  );
};

export { Button };
