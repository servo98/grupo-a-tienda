import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product.service";

import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllProducts();
        setproducts(data.products);
      } catch (error) {
        console.error("Error al obtener productos");
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {products.length === 0 ? (
        <h3>No hay productos en la base de datos</h3>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default Home;
