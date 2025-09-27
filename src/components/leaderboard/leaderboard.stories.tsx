import type { Meta, StoryObj } from "@storybook/react";
import { Leaderboard, Profile } from "./leaderboard";

const dummyProfiles: Profile[] = [
  {
    username: "Brandon",
    xp: 12500,
    avatarUrl: "src/assets/avatars/bear.png",
    selected: false,
  },
  {
    username: "Alice",
    xp: 10400,
    avatarUrl: "src/assets/avatars/rabbit.png",
    selected: true,
  },
  {
    username: "Michael",
    xp: 9600,
    avatarUrl: "src/assets/avatars/cat.png",
    selected: false,
  },
  {
    username: "Sofia",
    xp: 8450,
    avatarUrl: "src/assets/avatars/dog.png",
    selected: false,
  },
  {
    username: "Daniel",
    xp: 7900,
    avatarUrl: "src/assets/avatars/gorilla.png",
    selected: false,
  },
  {
    username: "Emma",
    xp: 7200,
    avatarUrl: "src/assets/avatars/duck.png",
    selected: false,
  },
  {
    username: "Liam",
    xp: 6800,
    avatarUrl: "src/assets/avatars/koala.png",
    selected: false,
  },
  {
    username: "Olivia",
    xp: 6500,
    avatarUrl: "src/assets/avatars/monkey.png",
    selected: false,
  },
  {
    username: "Noah",
    xp: 6100,
    avatarUrl: "src/assets/avatars/panda.png",
    selected: false,
  },
  {
    username: "Ava",
    xp: 5900,
    avatarUrl: "src/assets/avatars/bear.png",
    selected: false,
  },
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
