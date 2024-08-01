import { FieldValues, useFormContext } from "react-hook-form";
import { InputProps } from "../types/input";

export const DateTimeInput = <T extends FieldValues>(props: InputProps<T>) => {
  const { register } = useFormContext();
  const { name, ...rest } = props;
  return (
    <input
      type="datetime-local"
      defaultValue={new Date().toISOString().slice(0, 16)}
      className="input input-bordered input-lg w-full join-item"
      {...register(name)}
      {...rest}
    />
  );
};
