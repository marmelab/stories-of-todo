import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Application/Item",
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 10);
export const Pending: Story = {
  args: {
    remove: () => {},
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: false,
      dueDate: futureDate.toISOString(),
      priority: "medium",
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
      dueDate: "2024-05-15T08:38:00",
      priority: "medium",
      completedAt: "2024-05-10T08:38:00",
    },
  },
};

const almostExpiredDate = new Date();
almostExpiredDate.setHours(almostExpiredDate.getHours() + 25);
export const AlmostExpired: Story = {
  args: {
    remove: () => {},
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: false,
      dueDate: almostExpiredDate.toISOString(),
      priority: "high",
    },
  },
};

export const Expired: Story = {
  args: {
    remove: () => {},
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: false,
      dueDate: new Date().toISOString(),
      priority: "low",
    },
  },
};

// TODO: Add a story with a long title
