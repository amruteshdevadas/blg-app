import { MainLayout } from "./layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainLayout></MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
