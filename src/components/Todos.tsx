import { Todo } from "@/types/todo";
import { DueDateTimeInput } from "@components/DueDateTimeInput/DueDateTimeInput";
import { TitleInput } from "@components/TitleInput/TitleInput";
import { List } from "@components/List/List";
import { PrioritySelectInput } from "@components/PrioritySelectInput/PrioritySelectInput";
import { Toast } from "@components/Toast/Toast";
import { useCreateTodo } from "@services/mutations";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
          <TitleInput />
          <div className="flex join mt-1">
            <DueDateTimeInput />
            <PrioritySelectInput />
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
