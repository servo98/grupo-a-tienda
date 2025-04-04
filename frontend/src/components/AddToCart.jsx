import { useState } from "react";
import { addProductToCart } from "../services/cart.service";

const AddToCart = ({ productId }) => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleAdd = async () => {
    if (count <= 0) return;

    try {
      const { data } = await addProductToCart(productId, count);
      console.log(data);
      setCount(0);
    } catch (error) {
      console.error(error);
      console.error("Error al agregar producto al carrito");
    }
  };

  return (
    <>
      <input type="number" min={0} value={count} onChange={handleChange} />
      <button onClick={handleAdd}>Agregar al carrito</button>
    </>
  );
};

export default AddToCart;
