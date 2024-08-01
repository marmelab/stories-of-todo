export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  dueDate: string;
  priority: "low" | "medium" | "high";
}
