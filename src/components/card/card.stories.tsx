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
    title: "Orange",
    description: "This is an orange",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: true,
    buttonLabel: "More Info",
    buttonPosition: "top-right",
    buttonColor: "amber",
    bgIconColor: "amber",
    iconSrc:
      "https://cdn.jsdelivr.net/npm/emoji-datasource-google@15.0.1/img/google/64/1f34a.png",
    onButtonClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    title: "Earth !",
    description: "This is earth",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: true,
    buttonLabel: "More Info",
    buttonPosition: "bottom-right",
    buttonColor: "cyan",
    bgIconColor: "cyan",
    iconSrc:
      "https://cdn.jsdelivr.net/npm/emoji-datasource-google@15.0.1/img/google/64/1f30d.png",
    onButtonClick: () => {},
  },
};
