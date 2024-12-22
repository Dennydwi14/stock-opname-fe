import { queryClient } from "@core/libs/query/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@core/utils/routes";
import "./app.css";
import "./index.css";
import "./app-dark.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
