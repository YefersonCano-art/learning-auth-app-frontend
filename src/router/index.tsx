import { createBrowserRouter } from "react-router-dom";
import { LoginPage, RegisterPage } from "../modules/auth";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
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
        element: <h1>Dashboard ruta</h1>,
      },
    ],
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
