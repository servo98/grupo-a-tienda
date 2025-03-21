import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const CustomLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default CustomLayout;
