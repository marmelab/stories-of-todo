import { InputProps } from "@/types/input";
import { FieldValues, useFormContext } from "react-hook-form";

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
