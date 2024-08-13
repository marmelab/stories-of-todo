import { Todo } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TitleInput } from "./TitleInput";

const meta: Meta<typeof TitleInput> = {
  title: "Design System/Atoms/TitleInput",
  component: TitleInput,
};

export default meta;

type Story = StoryObj<typeof TitleInput>;

export const Default: Story = {
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
  args: {},
};

export const Required: Story = {
  decorators: [
    (Story) => {
      const { formState, ...rest } = useForm<Todo>();
      formState.errors.title = {
        message: "You cannot do nothing 😈",
        type: "required",
      };
      return (
        <FormProvider formState={formState} {...rest}>
          <Story />
        </FormProvider>
      );
    },
  ],
  args: {},
};
