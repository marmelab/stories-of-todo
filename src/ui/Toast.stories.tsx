import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Id, toast } from "react-toastify";

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
  args: {},
};

export const Success: Story = {
  render: () => {
    const notify = () => toast.success("Success !");
    return <Notify notify={notify} />;
  },
  args: {},
};

export const Error: Story = {
  render: () => {
    const notify = () => toast.error("Error !");
    return <Notify notify={notify} />;
  },
  args: {},
};
