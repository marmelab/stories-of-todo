import { InputProps } from "@/types/input";
import clsx from "clsx";
import { FieldValues, useFormContext } from "react-hook-form";

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const { name, ...rest } = props;
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder={
          (errors[name] && (errors[name].message as string)) ??
          "What do you want to do?"
        }
        className={clsx(
          errors[name] && "input-error",
          "input input-bordered input-lg w-full join-item"
        )}
        {...register(name, { required: "You cannot do nothing 😈" })}
        {...rest}
      />
    </div>
  );
};
