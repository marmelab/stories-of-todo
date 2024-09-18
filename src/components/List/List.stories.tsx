import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MswWrapper } from "../../msw/MswWrapper";
import { List } from "./List";
import { expect, userEvent, within } from "@storybook/test";
import { HIGHLIGHT } from "@storybook/addon-highlight";
import { useChannel } from "storybook/internal/preview-api";
import { data } from "@/msw/data";

const queryClient = new QueryClient();

const meta: Meta<typeof List> = {
  title: "Application/List",
  component: List,
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
        elements: ["li:first-child"],
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

type Story = StoryObj<typeof List>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteButtons = await canvas.findAllByRole("button", {
      name: /delete/i,
    });
    const items = await canvas.findAllByRole("listitem");
    await userEvent.click(deleteButtons[0], { delay: 200 });
    const updatedItems = await canvas.findAllByRole("listitem");
    expect(updatedItems.length).toBeLessThan(items.length);

    const toggleButtons = await canvas.findAllByRole("checkbox", {
      name: /toggle/i,
    });
    await userEvent.click(toggleButtons[0], { delay: 200 });
    expect(toggleButtons[0]).not.toBeChecked();
    await userEvent.click(toggleButtons[0], { delay: 200 });
    expect(toggleButtons[0]).toBeChecked();
  },
};
