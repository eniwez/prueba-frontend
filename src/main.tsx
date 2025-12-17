import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";

import AuthLayout from "./layouts/AuthLayout.tsx";
import HomePage from "./pages/Home.tsx";
import LoginPage from "./pages/Login.tsx";
import VerifyPage from "./pages/Verify.tsx";
import HistoryPage from "./pages/History.tsx";
import ErrorPage from "./pages/Error.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify" element={<VerifyPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route
                path="*"
                element={<ErrorPage message="Página no encontrada" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
