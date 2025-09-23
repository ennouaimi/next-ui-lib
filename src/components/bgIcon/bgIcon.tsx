import { Emoji } from "../Emoji/emoji";
import { colors, ColorName } from "../../constants/colors";
import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  color?: ColorName;
  customClass?: string;
  iconSrc?: string;
  emojiId?: string;
}

const BgIcon = ({
  color = "amber",
  onClick,
  customClass = "",
  iconSrc,
  emojiId,
}: ButtonProps) => {
  const colorSet = colors[color];

  return (
    <button
      className={`w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer transition duration-150 ease-in-out whitespace-nowrap active:translate-y-[4px] ${customClass}`}
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
