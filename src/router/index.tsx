import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage, RegisterPage } from "../modules/auth";
import { DashboardPage } from "../modules/dashboard";
import { NotFoundPage } from "../modules/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);

// {
//   element: <PrivateRoute />, // ← Componente padre que protege
//   children: [
//     {
//       path: "/dashboard",
//       element: <DashboardPage />,
//     },
//     {
//       path: "/profile",
//       element: <ProfilePage />,
//     },
//     {
//       path: "/users",
//       element: <h1>Users Page</h1>,
//     },
//   ],
// },
