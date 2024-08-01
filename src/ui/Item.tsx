import clsx from "clsx";
import { Todo } from "../types/todo";
import { PriorityBadge } from "./PriorityBadge";

export const Item = ({
  todo,
  update,
  remove,
}: {
  todo: Todo;
  update: (todo: Todo) => void;
  remove: (id: number) => void;
}) => {
  const handleChange = () => {
    update(todo);
  };

  const handleDelete = () => {
    remove(todo.id);
  };

  const date = new Date(todo.dueDate);
  const dueDate = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

  return (
    <li className="card bg-base-300 rounded-box h-20 flex items-center flex-row justify-between px-10 mb-3">
      <div className="flex items-center flex-row justify-between gap-10">
        <input
          type="checkbox"
          className="checkbox checkbox-success"
          checked={todo.completed}
          onChange={handleChange}
        />
        <div
          className={clsx(todo.completed && "line-through", "flex", "flex-col")}
        >
          <span className={"text-xs"}>{dueDate}</span>
          <span className={"text-lg"}>{todo.title}</span>
        </div>
      </div>
      <div className="flex items-center flex-row">
        <PriorityBadge priority={todo.priority} />
        <button
          className="ml-5 btn btn-xs btn-square btn-error"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
