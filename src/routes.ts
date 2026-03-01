import { createBrowserRouter } from "react-router";
import Landing from "../src/presentation/pages/Landing";
import Login from "../src/presentation/pages/Login";
import Signup from "../src/presentation/pages/Signup";
import Dashboard from "../src/presentation/pages/Dashboard";
import AnalyticsDashboard from "../src/presentation/pages/AnalyticsDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
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