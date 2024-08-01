import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodos, getTodosIds } from "./api";

export const useTodosIds = () => {
  return useQuery({
    queryKey: ["todosIds"],
    queryFn: getTodosIds,
  });
};

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

export const useTodosById = (ids: (number | undefined)[] | undefined) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todos", { id }],
        queryFn: () => getTodo(id!),
      };
    }),
  });
};
