import clsx from "clsx";
import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export const TitleInput = (props: HTMLAttributes<HTMLInputElement>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder={
          (errors.title && (errors.title.message as string)) ??
          "What do you want to do?"
        }
        className={clsx(
          errors.title && "input-error",
          "input input-bordered input-lg w-full join-item"
        )}
        {...register("title", { required: "You cannot do nothing 😈" })}
        {...props}
      />
    </div>
  );
};
