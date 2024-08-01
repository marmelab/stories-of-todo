import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Todo } from "../types/todo";
import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Design System/Atoms/Select",
  component: SelectInput,
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

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    name: "priority",
    options: ["high", "medium", "low"],
  },
};
