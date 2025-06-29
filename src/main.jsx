import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster></Toaster>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
              <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>

      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
);
