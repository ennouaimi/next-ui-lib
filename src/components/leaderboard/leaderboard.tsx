import { ButtonColor, ColorName, colors } from "../../constants/colors";
import { Card } from "../card";

// Type for leaderboard profiles
export interface Profile {
  username: string;
  xp: number;
  avatarUrl?: string;
}

export interface LeaderboardProps {
  profiles: Profile[];
  bgIconColor?: ColorName;
  loading?: boolean;
  buttonColor?: ButtonColor;
  buttonLabel?: string;
}

const Leaderboard = ({
  profiles,
  loading = false,
  buttonColor = "amber",
  buttonLabel = "more",
}: LeaderboardProps) => {
  return (
    <Card
      title="Leaderboard"
      button={true}
      buttonColor={buttonColor}
      buttonLabel={buttonLabel}
    >
      <section className="flex flex-col space-y-3 h-full">
        {loading
          ? [...Array(10)].map((_, index) => (
              <article
                key={index}
                className="flex w-full rounded-md h-1/3 space-x-2 animate-pulse"
              >
                <div className="w-12 h-12 bg-[#F0F0F1] rounded-full" />
                <div className="flex flex-col w-3/4 space-y-2 justify-center">
                  <span className="h-4 bg-[#F0F0F1] rounded-sm w-1/2" />
                  <span className="h-4 bg-[#F0F0F1] rounded-sm w-4/5" />
                </div>
              </article>
            ))
          : profiles.map((profile, index) => (
              <article
                key={index}
                className={`flex items-center space-x-4 px-3 py-1 rounded-lg cursor-pointer ${
                  profile.username === "Brandon"
                    ? "border-2 border-[#ffd700] bg-[#ffecb3] hover:border-[#FFC200] hover:bg-[#FFE08A]"
                    : "hover:bg-gray-100 hover:cursor-pointer"
                }`}
              >
                <p className="text-lg font-gabaritoBold text-[#374151] w-4">
                  {index + 1}
                </p>
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.username} avatar`}
                    className="inline select-none pointer-events-none object-cover"
                  />
                </div>
                <p className="flex-grow text-lg font-gabaritoMedium text-sec">
                  {profile.username}
                </p>
                <p className="text-sm font-gabaritoRegular text-[#374151]">
                  {profile.xp} XP
                </p>
              </article>
            ))}
      </section>
    </Card>
  );
};

export { Leaderboard };
