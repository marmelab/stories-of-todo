import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

const options = ["low", "medium", "high"];

export const PrioritySelectInput = (
  props: HTMLAttributes<HTMLSelectElement>
) => {
  const { register } = useFormContext();
  return (
    <select
      className="select select-bordered select-lg join-item"
      {...register("priority")}
      {...props}
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
