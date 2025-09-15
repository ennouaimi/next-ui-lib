import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    children: { control: "text" },
    customClass: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card Title",
    description: "This is a card",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: true,
    buttonLabel: "More Info",
    buttonPosition: "top-right",
    onButtonClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    title: "Card Title",
    description: "This is a card",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: true,
    buttonLabel: "More Info",
    buttonPosition: "bottom-right",
    onButtonClick: () => {},
  },
};
