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
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner text-primary "></span>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data.length === 0) {
    return (
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>No todo found</span>
      </div>
    );
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
