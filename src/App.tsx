import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./components/Todos";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
