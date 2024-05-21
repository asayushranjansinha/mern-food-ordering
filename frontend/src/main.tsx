import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import "./global.css";
import Layout from "./layouts/Layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurant from "./pages/ManageRestaurant";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/manage-restaurant" element={<ManageRestaurant />} />
              </Route>
            </Route>
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
          </Routes>
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
