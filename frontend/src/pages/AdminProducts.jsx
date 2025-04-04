import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getAdminProducts } from "../services/admin.product.service";
import ProductList from "../components/ProductList";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAdminProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error al obtener productos de admin");

        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Mis productos</h1>
      <Link to="/admin/products/add">Agregar producto</Link>
      <ProductList products={products} canEdit />
    </div>
  );
};

export default AdminProducts;
