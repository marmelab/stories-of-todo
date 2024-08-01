import type { Meta, StoryObj } from "@storybook/react";

import { Todos } from "./Todos";
import { MswWrapper } from "../msw/MswWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof Todos> = {
  title: "Todos",
  component: Todos,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MswWrapper>
          <Story />
        </MswWrapper>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Todos>;

const queryClient = new QueryClient();

export const Default: Story = {
  args: {},
};
