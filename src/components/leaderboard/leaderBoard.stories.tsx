import type { Meta, StoryObj } from "@storybook/react";
import { LeaderBoard, Profile } from "./leaderboard";
import bear from "../../assets/avatars/bear.png";
import rabbit from "../../assets/avatars/rabbit.png";
import cat from "../../assets/avatars/cat.png";
import dog from "../../assets/avatars/dog.png";
import gorilla from "../../assets/avatars/gorilla.png";
import duck from "../../assets/avatars/duck.png";
import koala from "../../assets/avatars/koala.png";
import monkey from "../../assets/avatars/monkey.png";
import panda from "../../assets/avatars/panda.png";

const dummyProfiles: Profile[] = [
  { username: "Brandon", xp: 12500, avatarUrl: bear, selected: false },
  { username: "Alice", xp: 10400, avatarUrl: rabbit, selected: true },
  { username: "Michael", xp: 9600, avatarUrl: cat, selected: false },
  { username: "Sofia", xp: 8450, avatarUrl: dog, selected: false },
  { username: "Daniel", xp: 7900, avatarUrl: gorilla, selected: false },
  { username: "Emma", xp: 7200, avatarUrl: duck, selected: false },
  { username: "Liam", xp: 6800, avatarUrl: koala, selected: false },
  { username: "Olivia", xp: 6500, avatarUrl: monkey, selected: false },
  { username: "Noah", xp: 6100, avatarUrl: panda, selected: false },
  { username: "Ava", xp: 5900, avatarUrl: bear, selected: false },
];

const meta = {
  title: "Playful SaaS UI/Leaderboard",
  component: LeaderBoard,
  tags: ["docsPage"],
} satisfies Meta<typeof LeaderBoard>;

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
