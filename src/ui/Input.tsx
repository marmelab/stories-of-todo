import { FieldValues, useFormContext } from "react-hook-form";
import { InputProps } from "../types/input";

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { register } = useFormContext();
  const { name, ...rest } = props;
  return (
    <>
      <input
        type="text"
        placeholder="What do you want to do?"
        className="input input-bordered input-lg w-full max-w-xs join-item"
        {...(register(name), { required: true })}
        {...rest}
      />
    </>
  );
};
