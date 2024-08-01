import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../services/mutations";
import { useTodos } from "../services/queries";
import { Todo } from "../types/todo";
import { Input } from "./Input";
import { List } from "./List";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "./Toast";

export const Todos = () => {
  const { data, isPending, error } = useTodos();

  const createTodo = useCreateTodo({
    onSuccess: (data: Todo) => {
      toast.success(`Todo "${data.title}" created!`);
    },
    onError: (error) => {
      toast.error(`Failed to create todo: ${error.message}`);
    },
  });

  const updateTodos = useUpdateTodo();

  const deteleTodo = useDeleteTodo();

  const formMethods = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodo.mutate(data);
  };

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
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleCreateTodoSubmit)}>
          <div className="flex join">
            <Input name="title" />
            <input
              className="btn btn-lg btn-primary join-item"
              type="submit"
              disabled={createTodo.isPending}
              value={createTodo.isPending ? "Creating..." : "Create"}
            />
          </div>
        </form>
      </FormProvider>
      <div className="divider" />
      <List
        todos={data}
        toggleComplete={toggleComplete}
        handleDeleteTodo={handleDeleteTodo}
      />
      <Toast />
    </>
  );
};
