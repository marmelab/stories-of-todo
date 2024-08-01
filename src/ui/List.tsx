import { SubmitHandler } from "react-hook-form";
import { Todo } from "../types/todo";
import { Item } from "./Item";

export const List = ({
  todos,
  toggleComplete,
  handleDeleteTodo,
}: {
  todos: Todo[];
  toggleComplete: SubmitHandler<Todo>;
  handleDeleteTodo: (id: number) => void;
}) => {
  return (
    <ul>
      {todos.map((todo) => (
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
