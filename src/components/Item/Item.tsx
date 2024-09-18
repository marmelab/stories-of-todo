import clsx from "clsx";
import { Todo } from "@/types/todo";
import { PriorityBadge } from "@components/PriorityBadge/PriorityBadge";
import { Countdown } from "@components/Countdown/Countdown";
import { useCountdown } from "@components/Countdown/useCountdown";

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

  const dueDate = new Date(todo.dueDate);
  const completedAt = todo.completedAt ? new Date(todo.completedAt) : null;
  const [days] = useCountdown(dueDate);

  return (
    <li className="card bg-base-300 rounded-box h-20 flex items-center flex-row justify-between px-10 mb-3">
      <div className="flex items-center flex-row justify-between gap-10">
        <input
          type="checkbox"
          className="checkbox checkbox-success"
          checked={todo.completed}
          onChange={handleChange}
          aria-label="toggle"
        />
        <div
          className={clsx(todo.completed && "line-through", "flex", "flex-col")}
        >
          <span className={"text-xs"}>
            {completedAt ? (
              completedAt.toLocaleString()
            ) : days < 100 ? (
              <Countdown targetDate={dueDate} />
            ) : (
              dueDate.toLocaleString()
            )}
          </span>
          <span className={"text-lg"}>{todo.title}</span>
        </div>
      </div>
      <div className="flex items-center flex-row">
        <PriorityBadge priority={todo.priority} />
        <button
          className="ml-5 btn btn-xs btn-square btn-error"
          onClick={handleDelete}
          aria-label="delete"
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
