import type { Meta, StoryObj } from "@storybook/react";
import { Countdown } from "./Countdown";

const meta: Meta<typeof Countdown> = {
  title: "Design System/Atoms/Coundown",
  component: Countdown,
};

export default meta;

type Story = StoryObj<typeof Countdown>;

const now = new Date();
now.setHours(now.getHours() + 25);
export const Default: Story = {
  args: {
    targetDate: now,
  },
};

// TODO: Add a story to display the countdown when the target date is exprired
// export const Expired: Story = {
//   args: {
//     targetDate: new Date(),
//   },
// };
