import type { Meta, StoryObj } from "@storybook/react";
import { PriorityBadge } from "./PriorityBadge";

const meta: Meta<typeof PriorityBadge> = {
  title: "PriorityBadge",
  component: PriorityBadge,
};

export default meta;

type Story = StoryObj<typeof PriorityBadge>;

export const Medium: Story = {
  args: {
    priority: "medium",
  },
};

export const High: Story = {
  args: {
    priority: "high",
  },
};

export const Low: Story = {
  args: {
    priority: "low",
  },
};
