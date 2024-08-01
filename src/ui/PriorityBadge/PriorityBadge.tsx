import clsx from "clsx";
import { Todo } from "../../types/todo";

export const PriorityBadge = ({ priority }: { priority: Todo["priority"] }) => (
  <div
    className={clsx(
      "badge",
      priority === "high"
        ? "badge-error"
        : priority === "medium"
          ? "badge-warning"
          : "badge-primary"
    )}
  >
    {priority}
  </div>
);
