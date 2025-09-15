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
    iconSrc:
      "https://cdn.jsdelivr.net/npm/emoji-datasource-google@15.0.1/img/google/64/1f34a.png",
    onClick: () => {},
  },
};
