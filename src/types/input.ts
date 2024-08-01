import { HTMLAttributes } from "react";
import { FieldValues, Path } from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  name: Path<T>;
} & HTMLAttributes<HTMLInputElement>;

export type SelectProps<T extends FieldValues> = {
  name: Path<T>;
  options: string[];
} & HTMLAttributes<HTMLSelectElement>;