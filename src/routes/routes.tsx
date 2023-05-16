import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashboardProvider } from "../providers/dashboardContext";
import { DashboardPage } from "../pages/dashboard";

export const LandingPages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <DashboardProvider>
            <DashboardPage />
          </DashboardProvider>
        }
      />
    </Routes>
  );
};
