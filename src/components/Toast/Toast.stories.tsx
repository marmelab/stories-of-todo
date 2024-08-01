import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { Id, toast } from "react-toastify";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Design System/Atoms/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

const Notify = ({ notify }: { notify: () => Id }) => (
  <div>
    <button className="btn btn-outline" onClick={notify}>
      Notify !
    </button>
    <Toast />
  </div>
);

export const Default: Story = {
  render: () => {
    const notify = () => toast("Default !");
    return <Notify notify={notify} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    userEvent.click(button);
  },
};

export const Success: Story = {
  render: () => {
    const notify = () => toast.success("Success !");
    return <Notify notify={notify} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    userEvent.click(button);
  },
};

export const Error: Story = {
  render: () => {
    const notify = () => toast.error("Error !");
    return <Notify notify={notify} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    userEvent.click(button);
  },
};
