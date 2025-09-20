import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    onClick: () => {},
  },
};
