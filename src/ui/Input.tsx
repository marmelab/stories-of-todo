import { HTMLAttributes } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
} & HTMLAttributes<HTMLInputElement>;

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { register } = useFormContext();
  const { name, ...rest } = props;
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered input-lg w-full max-w-xs join-item"
      {...register(name)}
      {...rest}
    />
  );
};
