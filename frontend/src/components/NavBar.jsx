import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
const NavBar = () => {
  const { isAuth, logoutProvider } = useAuth();

  const handleLogout = () => {
    logoutProvider();
  };

  return (
    <div>
      {isAuth ? (
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
          <li>
            <Link to="/orders">Historial de compras</Link>
          </li>
          <li>
            <Link to="/admin/products">Mis productos</Link>
          </li>
          <li>
            <button onClick={handleLogout}>
              <b>Cerrar Sesión</b>
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/register" data-test="registerLink">
              Registrarse
            </Link>
          </li>
          <li>
            <Link to="/login" data-test="loginLink">
              Iniciar sesión
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
