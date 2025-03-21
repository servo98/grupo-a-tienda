import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
