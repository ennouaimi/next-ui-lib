import { colors, ColorName } from "../../constants/colors";

export interface CheckBoxProps {
  color?: ColorName;
  completed: boolean;
  size?: number;
}

const CheckBox = ({ color = "amber", completed, size = 20 }: CheckBoxProps) => {
  const colorSet = colors[color];

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
