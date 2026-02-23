import { createBrowserRouter } from "react-router-dom";
import { LoginPage, RegisterPage } from "../modules/auth";

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
    path: "/dashboard",
    element: <h1>Dashboard ruta</h1>,
  },
]);
