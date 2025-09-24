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
  percentage?: number;
  showCard?: boolean;
  showPercentage?: boolean;
  loading?: boolean;
}

const ProgressBar = ({
  bgIconColor = "amber",
  iconSrc = "",
  label = "",
  percentage = 0,
  showCard = false,
  showPercentage = false,
  loading = false,
}: ProgressBarProps) => {
  const colorSet = colors[bgIconColor];

  const content = (
    <div className="flex w-full items-center pt-3">
      <BgIcon
        color={bgIconColor}
        iconSrc={iconSrc}
        loading={loading}
        onClick={() => {}}
      />
      <div className="flex flex-col ml-3 flex-1">
        <div className="flex justify-between mb-1 items-end">
          {label &&
            (loading ? (
              <p
                className="h-4 w-16 font-gabaritoMedium my-1 rounded-sm animate-pulse"
                style={{
                  backgroundColor: "#F1F1F1",
                  border: "1px solid #e9e9e9",
                }}
              />
            ) : (
              <p className="font-medium text-sec text-md">{label}</p>
            ))}

          {showPercentage && (
            <span className="text-base text-gray-500">{percentage}%</span>
          )}
        </div>
        {loading ? (
          <div
            className="relative w-full h-4 rounded-2xl overflow-hidden animate-pulse"
            style={{ backgroundColor: "#F1F1F1" }}
          ></div>
        ) : (
          <div
            className="relative w-full h-4 rounded-2xl overflow-hidden"
            style={{ backgroundColor: staticColors.Gray.value }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-2xl transition-all duration-300"
              style={{
                width: `${percentage}%`,
                background: `linear-gradient(to right, #FFC801, #FFC801)`,
                boxShadow: `0 1px 2px ${colorSet.dark}`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

  return showCard ? <Card>{content}</Card> : content;
};

export { ProgressBar };
