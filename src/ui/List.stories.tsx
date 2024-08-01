import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MswWrapper } from "../msw/MswWrapper";
import { List } from "./List";

const queryClient = new QueryClient();

const meta: Meta<typeof List> = {
  title: "Application/List",
  component: List,
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

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => <List />,
};
