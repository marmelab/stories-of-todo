import { Todo } from "@/types/todo";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TitleInput } from "./TitleInput";

const meta: Meta<typeof TitleInput> = {
  title: "Design System/Atoms/TitleInput",
  component: TitleInput,
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

type Story = StoryObj<typeof TitleInput>;

export const Default: Story = {
  args: {},
};
