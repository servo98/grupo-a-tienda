import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
