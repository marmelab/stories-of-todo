import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Todos } from "@/components/Todos";

const queryClient = new QueryClient();
export const TodosApp = () => (
  <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center mt-8 mb-8">My Todos</h1>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Todos />
    </QueryClientProvider>
  </div>
);
