import { buttonColors, type ButtonColor } from "../../constants/colors";

export interface ButtonProps {
  onClick: () => void;
  color?: ButtonColor;
  customClass?: string;
}

const BgIcon = ({
  color = "primary",
  onClick,
  customClass = "",
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs rounded-lg",
    medium: "px-3 py-1 text-base rounded-xl",
    large: "px-8 py-3 text-2xl rounded-2xl",
    full: "px-8 py-2 text-xl rounded-2xl w-full",
  };

  const colorSet = buttonColors[color];

  return (
    <button
      className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer"
      onClick={() => {}}
      style={{
        backgroundColor: colorSet.value,
        boxShadow: `0 4px 0 ${colorSet.dark}`,
      }}
    ></button>
  );
};

export { BgIcon };
