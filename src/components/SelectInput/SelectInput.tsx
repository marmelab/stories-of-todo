import { SelectProps } from "@/types/input";
import { FieldValues, useFormContext } from "react-hook-form";

export const SelectInput = <T extends FieldValues>(props: SelectProps<T>) => {
  const { register } = useFormContext();
  const { name, options, ...rest } = props;
  return (
    <select
      className="select select-bordered select-lg join-item"
      {...register(name)}
      {...rest}
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
