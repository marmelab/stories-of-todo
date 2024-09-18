import type { Meta, StoryObj } from "@storybook/react";
import { useChannel } from "@storybook/preview-api";
import { HIGHLIGHT } from "@storybook/addon-highlight";
import { Todos } from "./Todos";
import { MswWrapper } from "../msw/MswWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, fireEvent, userEvent, within } from "@storybook/test";
import { data } from "@/msw/data";

const queryClient = new QueryClient();

const meta: Meta<typeof Todos> = {
  title: "Application/Todos",
  component: Todos,
  async beforeEach() {
    return async () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    };
  },
  decorators: [
    (Story) => {
      const emit = useChannel({});
      emit(HIGHLIGHT, {
        elements: [".btn-primary"],
      });
      return (
        <QueryClientProvider client={queryClient}>
          <MswWrapper data={data}>
            <Story />
          </MswWrapper>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Todos>;


export const Application: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titlenput = await canvas.findByPlaceholderText(
      "What do you want to do?"
    );
    const randomId = Math.random().toString(36).substring(7);
    userEvent.type(titlenput, `Learn React - ${randomId}`);
    const dateTimeInput = await canvas.getByTestId("datetime-input");
    const randomDate = new Date(
      2025,
      Math.floor(Math.random() * 12), // Random month (0-11)
      Math.floor(Math.random() * 28) + 1, // Random day (1-28)
      Math.floor(Math.random() * 24), // Random hour (0-23)
      Math.floor(Math.random() * 60) // Random minute (0-59)
    )
      .toISOString()
      .slice(0, 16);

    fireEvent.change(dateTimeInput, {
      target: { value: randomDate },
    });
    const button = canvas.getByRole("button", { name: /add/i });
    await userEvent.click(button, { delay: 700 });
    const item = await canvas.findByText(`Learn React - ${randomId}`);
    expect(item).toBeInTheDocument();
  },
};
