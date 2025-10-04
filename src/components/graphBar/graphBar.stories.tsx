// GraphBar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { GraphBar } from "./graphBar";

const meta: Meta<typeof GraphBar> = {
  title: "Components/GraphBar",
  component: GraphBar,
  argTypes: {
    data: { control: "object" },
    customClass: { control: "text" },
    loading: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof GraphBar>;

const testData = [
  { day: "Mon", consistency: 30 },
  { day: "Tue", consistency: 50 },
  { day: "Wed", consistency: 40 },
  { day: "Thu", consistency: 60 },
  { day: "Fri", consistency: 20 },
  { day: "Sat", consistency: 70 },
  { day: "Sun", consistency: 50 },
];

export const Default: Story = {
  args: {
    data: testData,
    customClass: "h-80",
    loading: false,
  },
};
