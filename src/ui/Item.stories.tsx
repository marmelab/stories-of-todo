import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Application/Item",
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Pending: Story = {
  args: {
    remove: () => {},
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: false,
      dueDate: "2025-05-15T08:38:00",
      priority: "high",
    },
  },
};

export const Completed: Story = {
  args: {
    remove: () => {},
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: true,
      dueDate: "2025-05-15T08:38:00",
      priority: "medium",
    },
  },
};
