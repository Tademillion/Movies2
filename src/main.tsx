import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import { AuthContextProvider } from "./components/common/AuthContext.tsx";
const queryclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);

//  in context we have three things
//  cretae context with the structure how many boxes
// implement what those three boxes do
// who acces that box i.e wrapp the elements in provider
