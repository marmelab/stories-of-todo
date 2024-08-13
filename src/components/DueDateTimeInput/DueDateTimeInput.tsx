import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export const DueDateTimeInput = (props: HTMLAttributes<HTMLInputElement>) => {
  const { register } = useFormContext();
  return (
    <input
      type="datetime-local"
      data-testId="datetime-input"
      defaultValue={new Date().toISOString().slice(0, 16)}
      className="input input-bordered input-lg w-full join-item"
      {...register("dueDate")}
      {...props}
    />
  );
};
