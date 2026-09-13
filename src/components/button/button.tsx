import {
  buttonColors,
  ButtonColorSet,
} from "../../constants/colors";

type ButtonColorName = keyof typeof buttonColors;

export interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColorSet | ButtonColorName;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "full";
  customClass?: string;
}

const Button = ({
  color = "default",
  onClick,
  label,
  size = "medium",
  variant = "primary",
  customClass = "",
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs rounded-lg",
    medium: "px-3 py-1 text-base rounded-xl",
    large: "px-8 py-3 text-2xl rounded-2xl",
    full: "px-8 py-2 text-xl rounded-2xl w-full",
  };

  const colorSet: ButtonColorSet =
    typeof color === "string"
      ? buttonColors[color] ?? buttonColors.default
      : color;

  const activeColor = colorSet[variant];
  const shadowDepth = size === "large" ? "6px" : "4px";

  return (
    <button
      className={`relative flex items-center justify-center cursor-pointer transition duration-150 ease-in-out whitespace-nowrap active:translate-y-[4px] ${sizeClasses[size]} ${customClass}`}
      style={{
        backgroundColor: activeColor.value,
        boxShadow: `0 ${shadowDepth} 0 ${activeColor.dark}`,
        color: activeColor.text,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = `0 ${shadowDepth} 0 ${activeColor.dark}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 ${shadowDepth} 0 ${activeColor.dark}`;
      }}
      onClick={onClick}
    >
      <span className="font-bold">{label}</span>
    </button>
  );
};

export { Button };
