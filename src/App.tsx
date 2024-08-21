import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-8">My Todos</h1>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Todos />
      </QueryClientProvider>
    </div>
  );
}

export default App;
