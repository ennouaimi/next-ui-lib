import { colors, ColorName } from "../../constants/colors";

export interface CheckBoxProps {
  color?: ColorName;
  completed: boolean;
  size?: number;
  loading?: boolean;
}

const CheckBox = ({
  color = "amber",
  completed,
  size = 20,
  loading = false,
}: CheckBoxProps) => {
  const colorSet = colors[color];

  if (loading) {
    return (
      <div
        className="rounded-full animate-pulse"
        style={{
          width: size,
          height: size,
          backgroundColor: "#F1F1F1",
          border: "1px solid #e9e9e9",
        }}
      />
    );
  }

  return completed ? (
    <div
      className="flex items-center justify-center border-[1px] rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: colorSet?.value,
        borderColor: colorSet?.dark,
      }}
    >
      <img
        src="src/assets/icons/check.svg"
        alt="Icon"
        width={size * 0.8}
        height={size * 0.8}
        className="inline select-none pointer-events-none"
      />
    </div>
  ) : (
    <div
      className="border-[1px] rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: "#E5E5E5",
        borderColor: "#ccc",
      }}
    />
  );
};

export { CheckBox };
