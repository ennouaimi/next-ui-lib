import type { Meta, StoryObj } from "@storybook/react";
import { WeekStreak } from "./weekStreak";

const meta = {
  title: "Example/WeekStreak",
  component: WeekStreak,
  tags: ["docsPage"],
} satisfies Meta<typeof WeekStreak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Eating pancakes",
    records: {
      "2024-06-01": true,
      "2024-06-02": false,
      "2024-06-03": true,
      "2024-06-04": true,
      "2024-06-05": false,
      "2024-06-06": true,
      "2024-06-07": true,
    },
  },
};
