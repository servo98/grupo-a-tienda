import { Outlet, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  console.log("Is auth en la ruta protegida es", isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
