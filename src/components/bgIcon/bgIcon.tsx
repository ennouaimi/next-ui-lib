import { Emoji } from "../Emoji/emoji";
import { colors, ColorName } from "../../constants/colors";

export interface BgIconProps {
  onClick: () => void;
  color?: ColorName;
  customClass?: string;
  iconSrc?: string;
  emojiId?: string;
  loading?: boolean;
  isRect?: boolean;
}

const BgIcon = ({
  color = "default",
  onClick,
  customClass = "",
  iconSrc,
  emojiId,
  loading = false,
  isRect = false,
}: BgIconProps) => {
  const colorSet = colors[color];

  if (loading) {
    return (
      <div
        className={`w-12 h-12 rounded-lg animate-pulse ${customClass}`}
        style={{
          backgroundColor: "#F1F1F1",
          boxShadow: `0 4px 0 #e2e2e2`,
        }}
      />
    );
  }

  return (
    <button
      className={`${
        isRect ? "h-16" : "h-12"
      }  w-14 rounded-lg flex items-center justify-center cursor-pointer transition duration-150 ease-in-out whitespace-nowrap active:translate-y-[4px] ${customClass}`}
      onClick={onClick}
      style={{
        backgroundColor: colorSet.value,
        boxShadow: `0 4px 0 ${colorSet.dark}`,
      }}
    >
      <span className="text-2xl">
        {iconSrc && (
          <img
            style={{
              maxWidth: "1.2em",
              maxHeight: "1.2em",
              display: "inline-block",
            }}
            src={iconSrc}
          />
        )}
        {emojiId && <Emoji id={emojiId} set="google" />}
      </span>
    </button>
  );
};

export { BgIcon };
