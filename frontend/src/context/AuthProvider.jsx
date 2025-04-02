import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

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
