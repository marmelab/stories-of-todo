import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Item",
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: false,
    },
  },
};

export const completed: Story = {
  args: {
    todo: {
      id: 1,
      title: "Learn React Query",
      completed: true,
    },
  },
};
