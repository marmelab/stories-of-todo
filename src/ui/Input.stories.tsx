import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { Todo } from "../types/todo";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
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
    name: "title",
  },
};
