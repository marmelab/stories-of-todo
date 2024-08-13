import { Todo } from "@/types/todo";
import { DueDateTimeInput } from "@components/DueDateTimeInput/DueDateTimeInput";
import { TitleInput } from "@components/TitleInput/TitleInput";
import { List } from "@components/List/List";
import { PrioritySelectInput } from "@components/PrioritySelectInput/PrioritySelectInput";
import { Toast } from "@components/Toast/Toast";
import { useCreateTodo } from "@services/mutations";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { SubmitButton } from "@components/SubmitButton/SubmitButton";

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
            <SubmitButton isPending={createTodo.isPending} label="Add!" />
          </div>
        </form>
      </FormProvider>
      <div className="divider" />
      <List />
      <Toast />
    </>
  );
};
