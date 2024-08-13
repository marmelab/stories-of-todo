import { Todo } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { PrioritySelectInput } from "./PrioritySelectInput";

const meta: Meta<typeof PrioritySelectInput> = {
  title: "Design System/Atoms/PrioritySelectInput",
  component: PrioritySelectInput,
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

type Story = StoryObj<typeof PrioritySelectInput>;

export const Default: Story = {
  args: {},
};
