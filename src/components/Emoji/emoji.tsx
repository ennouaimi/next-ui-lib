import { colors, ColorName } from "../../constants/colors";
import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";

init({ data });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "em-emoji": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          shortcodes?: string;
          native?: string;
          size?: string | number;
          set?: "native" | "apple" | "facebook" | "google" | "twitter";
          skin?: number;
          fallback?: string;
        },
        HTMLElement
      >;
    }
  }
}

export interface EmojiProps {
  id: string;
  picker?: boolean;
  set?: "native" | "apple" | "facebook" | "google" | "twitter";
  onEmojiSelect?: (emoji: any) => void;
}

const Emoji = ({
  id = "pancakes",
  picker = false,
  set = "google",
  onEmojiSelect,
}: EmojiProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const EmojiElement = (
    <em-emoji id={id} set={set} size={picker ? "1.6em" : "1.2em"} />
  );

  return (
    <div className="relative flex items-center">
      {picker ? (
        <button
          type="button"
          onClick={() => setShowPicker((prev) => !prev)}
          className="p-2 w-12 h-12 rounded-md text-2xl flex items-center justify-center"
          aria-label="Select icon"
        >
          {EmojiElement}
        </button>
      ) : (
        <div className="p-2 w-12 h-12 rounded-md text-2xl flex items-center justify-center">
          {EmojiElement}
        </div>
      )}

      {picker && showPicker && (
        <div className="absolute z-50 top-full mt-2">
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => {
              if (onEmojiSelect) onEmojiSelect(emoji);
              setShowPicker(false);
            }}
            onClickOutside={() => setShowPicker(false)}
            set="google"
            theme="light"
            noCountryFlags
            previewPosition="none"
          />
        </div>
      )}
    </div>
  );
};

export { Emoji };
