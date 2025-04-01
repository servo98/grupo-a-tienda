import { Link } from "react-router";
const AdminProducts = () => {
  return (
    <div>
      <h1>Mis productos</h1>
      <Link to="/admin/products/add">Agregar producto</Link>
    </div>
  );
};

export default AdminProducts;
