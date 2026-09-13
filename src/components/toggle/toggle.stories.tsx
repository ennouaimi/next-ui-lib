import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta = {
  title: "Playful SaaS UI/Toggle",
  id: "example-toggle",
  component: Toggle,
  tags: ["docsPage"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
