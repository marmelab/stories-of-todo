import { HTMLAttributes } from "react";

export const SubmitButton = (
  props: HTMLAttributes<HTMLButtonElement> & {
    isPending: boolean;
    label: string;
  }
) => {
  const { isPending, label, ...rest } = props;
  return (
    <button
      className="btn btn-lg btn-primary join-item"
      type="submit"
      disabled={isPending}
      {...rest}
    >
      {isPending ? <span className="loading loading-spinner"></span> : label}
    </button>
  );
};
