import { ColorName } from "../../constants/colors";
import { BgIcon } from "../bgIcon";
import { Card } from "../card";
import { CheckBox } from "../checkBox";

export interface WeekStreakProps {
  label?: string;
  emojiId?: string;
  color?: ColorName;
  records: Record<string, boolean>;
  loading?: boolean;
}

const WeekStreak = ({
  label = "",
  color = "amber",
  records = {},
  emojiId = "pancakes",
  loading = false,
}: WeekStreakProps) => {
  return (
    <div className="flex w-full rounded-lg py-3">
      <BgIcon
        emojiId={emojiId}
        color={color}
        loading={loading}
        onClick={() => {}}
      />
      <div className="w-3/4 h-12 rounded-lg ml-2 flex flex-col justify-between">
        {loading ? (
          <p
            className="h-4 w-16 font-gabaritoMedium mt-1 rounded-sm"
            style={{
              backgroundColor: "#F1F1F1",
              border: "1px solid #e9e9e9",
            }}
          ></p>
        ) : (
          <p className="font-gabaritoMedium text-sec mb-1">{label}</p>
        )}
        <div className="flex space-x-2">
          {Object.entries(records).map(([_, completed]) => (
            <CheckBox
              color={color}
              completed={completed}
              loading={loading}
            ></CheckBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WeekStreak };
