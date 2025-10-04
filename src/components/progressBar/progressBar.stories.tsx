import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./progressBar";

const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
  tags: ["docsPage"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Streak",
    description: "Complete 7 days streak",
    bgIconColor: "amber",
    percentage: 70,
    showCard: true,
    iconSrc:
      "https://cdn.jsdelivr.net/npm/emoji-datasource-google@15.0.1/img/google/64/1f34a.png",
  },
};
