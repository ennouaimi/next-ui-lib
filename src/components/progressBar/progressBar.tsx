import {
  buttonColors,
  ColorName,
  colors,
  staticColors,
} from "../../constants/colors";
import { BgIcon } from "../bgIcon";
import { Card } from "../card";

export interface ProgressBarProps {
  bgIconColor?: ColorName;
  iconSrc?: string;
  label?: string;
  percentage?: number; // 0–100
  showCard?: boolean;
  showPercentage?: boolean;
}

const ProgressBar = ({
  bgIconColor = "amber",
  iconSrc = "",
  label = "",
  percentage = 0,
  showCard = false,
  showPercentage = false,
}: ProgressBarProps) => {
  const colorSet = colors[bgIconColor];

  const content = (
    <div className="flex w-full items-center">
      {/* Icon */}
      <BgIcon color={bgIconColor} iconSrc={iconSrc} onClick={() => {}} />

      {/* Content */}
      <div className="flex flex-col ml-3 flex-1">
        {/* Label + Percentage */}
        <div className="flex justify-between mb-1 items-end">
          {label && <p className="font-medium text-sec text-md">{label}</p>}
          {showPercentage && (
            <span className="text-base text-gray-500">{percentage}%</span>
          )}
        </div>

        {/* Progress track */}
        <div
          className="relative w-full h-4 rounded-2xl overflow-hidden"
          style={{ backgroundColor: staticColors.Gray.value }}
        >
          {/* Progress fill */}
          <div
            className="absolute top-0 left-0 h-full rounded-2xl transition-all duration-300"
            style={{
              width: `${percentage}%`,
              background: `linear-gradient(to right, #FFC801, #FFC801)`,
              boxShadow: `0 1px 2px ${colorSet.dark}`,
            }}
          />
        </div>
      </div>
    </div>
  );

  return showCard ? <Card>{content}</Card> : content;
};

export { ProgressBar };
