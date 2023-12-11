import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./screen/Home";
import Add from "./screen/Add";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from "./screen/Edit";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/add",
      Component: Add,
    },
    {
      path: "/edit/:id",
      Component: Edit,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
