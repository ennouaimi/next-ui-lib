import {
  buttonColors,
  ColorName,
  colors,
  staticColors,
} from "../../constants/colors";
import { BgIcon } from "../bgIcon";
import { Card } from "../card";
import { CheckBox } from "../checkBox";

export interface WeekStreakProps {
  label?: string;
  emojiId?: string;
  color?: ColorName;
  records: Record<string, boolean>;
}

const WeekStreak = ({
  label = "",
  color = "amber",
  records = {},
  emojiId = "pancakes",
}: WeekStreakProps) => {
  return (
    <div className="flex w-full rounded-lg h-14">
      <BgIcon emojiId={emojiId} color={color} onClick={() => {}} />
      <div className="w-3/4 h-full rounded-lg ml-2 flex flex-col justify-start">
        <p className="font-gabaritoMedium text-sec mb-1">{label}</p>
        <div className="flex space-x-2">
          {Object.entries(records).map(([_, completed]) => (
            <CheckBox color={color} completed={completed}></CheckBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WeekStreak };
