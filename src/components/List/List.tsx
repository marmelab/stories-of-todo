import { Todo } from "@/types/todo";
import { Item } from "@components/Item/Item";
import { useDeleteTodo, useUpdateTodo } from "@services/mutations";
import { useTodos } from "@services/queries";
import { SubmitHandler } from "react-hook-form";

export const List = () => {
  const { data, isPending, error } = useTodos();
  const updateTodos = useUpdateTodo();
  const deteleTodo = useDeleteTodo();
  const toggleComplete: SubmitHandler<Todo> = (data) => {
    updateTodos.mutate({
      ...data,
      completed: !data.completed,
      completedAt: !data.completed === true ? new Date().toISOString() : null,
    });
  };

  const handleDeleteTodo = (id: number) => {
    deteleTodo.mutate(id);
  };
  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
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
