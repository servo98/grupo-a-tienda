import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { setAuthToken } from "../services/api";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (isAuth) {
      const token = localStorage.getItem("token");
      setAuthToken(token);
    } else {
      setAuthToken(null);
    }
  }, [isAuth]);

  const loginProvider = (token) => {
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logoutProvider = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginProvider, logoutProvider }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
