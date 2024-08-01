import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateTodo } from "../services/mutations";
import { Todo } from "../types/todo";
import { DateTimeInput } from "./DateTimeInput";
import { Input } from "./Input";
import { List } from "./List";
import { SelectInput } from "./SelectInput";
import { Toast } from "./Toast";

export const Todos = () => {
  const createTodo = useCreateTodo({
    onSuccess: (data: Todo) => {
      toast.success(`Todo "${data.title}" created!`);
    },
    onError: (error) => {
      toast.error(`Failed to create todo: ${error.message}`);
    },
  });

  const formMethods = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodo.mutate(data);
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleCreateTodoSubmit)}>
          <Input name="title" />
          <div className="flex join mt-1">
            <DateTimeInput name="dueDate" />
            <SelectInput name="priority" options={["low", "medium", "high"]} />
            <button
              className="btn btn-lg btn-primary join-item"
              type="submit"
              disabled={createTodo.isPending}
            >
              {createTodo.isPending ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Add !"
              )}
            </button>
          </div>
        </form>
      </FormProvider>
      <div className="divider" />
      <List />
      <Toast />
    </>
  );
};
