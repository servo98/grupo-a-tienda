import { Outlet, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
