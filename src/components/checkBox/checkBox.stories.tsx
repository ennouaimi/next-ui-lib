import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./checkBox";

const meta = {
  title: "Playful SaaS UI/CheckBox",
  component: CheckBox,
  tags: ["docsPage"],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    color: "amber",
    completed: true,
  },
};

export const Unchecked: Story = {
  args: {
    color: "amber",
    completed: false,
  },
};
