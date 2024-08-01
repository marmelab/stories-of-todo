import { Todo } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimeInput } from "./DateTimeInput";

const meta: Meta<typeof DateTimeInput> = {
  title: "Design System/Atoms/DateTimeInput",
  component: DateTimeInput,
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

type Story = StoryObj<typeof DateTimeInput>;

export const Default: Story = {
  args: {
    name: "dueDate",
  },
};
