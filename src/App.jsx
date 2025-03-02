import { MainLayout } from "./layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainLayout></MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default App;
