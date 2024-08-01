import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { Todo } from "../types/todo";
import { DateTimeInput } from "./DateTimeInput";

const meta: Meta<typeof DateTimeInput> = {
  title: "DateInput",
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

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: "dueDate",
  },
};
