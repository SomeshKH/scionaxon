import { createBrowserRouter } from "react-router";
import Landing from "@/presentation/pages/Landing";
import Dashboard from "@/presentation/pages/Dashboard";
import AnalyticsDashboard from "@/presentation/pages/AnalyticsDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/analytics",
    Component: AnalyticsDashboard,
  },
]);