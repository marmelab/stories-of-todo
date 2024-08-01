import type { Meta, StoryObj } from "@storybook/react";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT } from "@storybook/addon-highlight";
import { Todos } from "./Todos";
import { MswWrapper } from "../msw/MswWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Todos> = {
  title: "Application/Todos",
  component: Todos,
  decorators: [
    (Story) => {
      const emit = useChannel({});
      emit(HIGHLIGHT, {
        elements: [".btn-primary"],
      });
      return (
        <QueryClientProvider client={queryClient}>
          <MswWrapper>
            <Story />
          </MswWrapper>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Todos>;

const queryClient = new QueryClient();

export const Application: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText("What do you want to do?");
    userEvent.type(input, "Learn React");
    const button = canvas.getByRole("button", { name: /add/i });
    userEvent.click(button, { delay: 700 });
  },
};
