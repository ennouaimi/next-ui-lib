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
  description?: string;
  percentage?: number;
  showCard?: boolean;
  showPercentage?: boolean;
  loading?: boolean;
}

const ProgressBar = ({
  bgIconColor = "amber",
  iconSrc = "",
  label = "",
  description,
  percentage = 0,
  showCard = false,
  showPercentage = false,
  loading = false,
}: ProgressBarProps) => {
  const content = (
    <div className="flex w-full items-center pt-1">
      <BgIcon
        color={bgIconColor}
        iconSrc={iconSrc}
        loading={loading}
        isRect={!!description}
        onClick={() => {}}
      />
      <div className="flex flex-col ml-3 flex-1">
        <div className="flex justify-between items-end">
          {label &&
            (loading ? (
              <p className="h-4 w-16 font-gabaritoMedium rounded-sm animate-pulse bg-gray-200" />
            ) : (
              <p className="text-sec text-md">{label}</p>
            ))}

          {showPercentage && (
            <span className="text-base text-gray-500">{percentage}%</span>
          )}
        </div>

        {description && (
          <div className="flex justify-between items-end">
            <span className="text-base font-regular text-gray-600">
              {description}
            </span>
          </div>
        )}

        {loading ? (
          <div className="relative w-full h-4 rounded-2xl overflow-hidden animate-pulse bg-gray-200" />
        ) : (
          <div className="relative w-full h-4 rounded-2xl overflow-hidden bg-gray-300 mt-1">
            <div
              className="absolute top-0 left-0 h-full rounded-2xl transition-all duration-300"
              style={{
                width: `${percentage}%`,
                backgroundColor: "#FFC801",
                boxShadow: "0 1px 2px #CC9F00",
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
