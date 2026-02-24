import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/useAuth";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Versión futura con verificación en backend

// import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

// const PrivateRoute = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setIsAuthenticated(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/auth/verify", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.ok) {
//         setIsAuthenticated(true);
//       } else {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       setIsAuthenticated(false);
//     }
//   };

//   if (isAuthenticated === null) {
//     return <div>Cargando...</div>;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />; // ← Renderiza las rutas hijas
// };

// export default PrivateRoute;
