import { Todo } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { DueDateTimeInput } from "./DueDateTimeInput";

const meta: Meta<typeof DueDateTimeInput> = {
  title: "Design System/Atoms/DueDateTimeInput",
  component: DueDateTimeInput,
  decorators: [
    (Story) => {
      const formMethods = useForm<Todo>();
      return (
        <FormProvider {...formMethods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof DueDateTimeInput>;

export const Default: Story = {
  args: {},
};
