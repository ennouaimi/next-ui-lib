import type { Meta, StoryObj } from "@storybook/react";
import { Emoji } from "./emoji";

const meta = {
  title: "Assets/Emoji",
  component: Emoji,
  tags: ["docsPage"],
} satisfies Meta<typeof Emoji>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Burger: Story = {
  args: { id: "hamburger", set: "google" },
};

export const Pancake: Story = {
  args: { id: "pancakes", set: "google" },
};
