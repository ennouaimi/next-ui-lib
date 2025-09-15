import type { Meta, StoryObj } from "@storybook/react";
import { BgIcon } from "./bgIcon";

const meta = {
  title: "Example/BgIcon",
  component: BgIcon,
  tags: ["docsPage"],
} satisfies Meta<typeof BgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "amber",
    onClick: () => {},
  },
};
