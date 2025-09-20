import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta = {
  title: "Example/Toggle",
  component: Toggle,
  tags: ["docsPage"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
