import type { Meta, StoryObj } from "@storybook/react";
import { Leaderboard, Profile } from "./leaderboard";

const dummyProfiles: Profile[] = [
  { username: "Brandon", xp: 12500, avatarUrl: "src/assets/avatars/bear.png" },
  { username: "Alice", xp: 10400, avatarUrl: "src/assets/avatars/rabbit.png" },
  { username: "Michael", xp: 9600, avatarUrl: "src/assets/avatars/cat.png" },
  { username: "Sofia", xp: 8450, avatarUrl: "src/assets/avatars/dog.png" },
  { username: "Daniel", xp: 7900, avatarUrl: "src/assets/avatars/gorilla.png" },
  { username: "Emma", xp: 7200, avatarUrl: "src/assets/avatars/duck.png" },
  { username: "Liam", xp: 6800, avatarUrl: "src/assets/avatars/koala.png" },
  { username: "Olivia", xp: 6500, avatarUrl: "src/assets/avatars/monkey.png" },
  { username: "Noah", xp: 6100, avatarUrl: "src/assets/avatars/panda.png" },
  { username: "Ava", xp: 5900, avatarUrl: "src/assets/avatars/bear.png" },
];

const meta = {
  title: "Example/Leaderboard",
  component: Leaderboard,
  tags: ["docsPage"],
} satisfies Meta<typeof Leaderboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profiles: dummyProfiles,
    bgIconColor: "amber",
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    profiles: dummyProfiles,
    bgIconColor: "amber",
    loading: true,
  },
};
