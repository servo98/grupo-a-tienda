import { login } from "../services/auth.service";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Navigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { loginProvider, isAuth } = useAuth();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setisLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setisLoading(true);
      const { data } = await login(formData.email, formData.password);
      loginProvider(data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} />
      ) : (
        <div>
          <form>
            <div>
              <label htmlFor="email">Correo</label>
              <input
                type="text"
                name="email"
                id="email"
                data-test="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                data-test="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              data-test="loginSubmit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
