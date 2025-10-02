// Leaderboard.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GraphBar, GraphBarProps } from "./graphBar";

const meta: Meta<typeof GraphBar> = {
  title: "Components/GraphBar",
  component: GraphBar,
  argTypes: {
    days: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof GraphBar>;

// Test data for Storybook
const testDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Default: Story = {
  args: {
    days: testDays,
  },
};
