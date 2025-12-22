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
  progress?: string;
  percentage?: number;
  showCard?: boolean;
  showProgress?: boolean;
  loading?: boolean;
}

const ProgressBar = ({
  bgIconColor = "default",
  iconSrc = "",
  label = "",
  description,
  percentage = 0,
  showCard = false,
  showProgress = false,
  progress,
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
              <p className="text-sec text-lg">{label}</p>
            ))}

          {showProgress && !description && (
            <span className="text-sm text-gray-500">
              {progress || `${percentage}%`}
            </span>
          )}
        </div>

        {description && (
          <div className="flex justify-between items-end">
            <span className="text-sm font-regular text-gray-500">
              {description}
            </span>
            {showProgress && (
              <span className="text-sm text-gray-500">
                {progress || `${percentage}%`}
              </span>
            )}
          </div>
        )}

        {loading ? (
          <div className="relative w-full h-4 rounded-2xl overflow-hidden animate-pulse bg-[#F1F1F1]" />
        ) : (
          <div className="relative w-full h-4 rounded-2xl overflow-hidden bg-[#F1F1F1] mt-1">
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
