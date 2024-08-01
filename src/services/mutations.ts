import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo, deleteTodo, updateTodo } from "./api";

export const useCreateTodo = (
  mutationOptions?: Partial<
    Omit<UseMutationOptions<Todo, Error, Todo>, "mutationFn" | "onSettled">
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      }
    },
    ...mutationOptions,
  });
};

export const useUpdateTodo = (
  mutationOptions?: Partial<
    Omit<UseMutationOptions<Todo, Error, Todo>, "mutationFn" | "onSettled">
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["todos", { id: variables.id }],
        });
      }
    },
    ...mutationOptions,
  });
};

export const useDeleteTodo = (
  mutationOptions?: Partial<
    Omit<UseMutationOptions<unknown, Error, number>, "mutationFn" | "onSettled">
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSettled: async (_, error) => {
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      }
    },
    ...mutationOptions,
  });
};
