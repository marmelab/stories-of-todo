import { SubmitHandler } from "react-hook-form";
import { Todo } from "../types/todo";
import { Item } from "./Item";
import { useTodos } from "../services/queries";
import { useDeleteTodo, useUpdateTodo } from "../services/mutations";

export const List = () => {
  const { data, isPending, error } = useTodos();
  const updateTodos = useUpdateTodo();
  const deteleTodo = useDeleteTodo();
  const toggleComplete: SubmitHandler<Todo> = (data) => {
    updateTodos.mutate({ ...data, completed: !data.completed });
  };

  const handleDeleteTodo = (id: number) => {
    deteleTodo.mutate(id);
  };
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <ul>
      {data?.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          update={toggleComplete}
          remove={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};
