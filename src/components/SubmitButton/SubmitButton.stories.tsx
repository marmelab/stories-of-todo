import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "Design System/Atoms/SubmitButton",
  component: SubmitButton,
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    label: "Add!",
  },
};

export const Pending: Story = {
  args: {
    isPending: true,
    label: "Add!",
  },
};
