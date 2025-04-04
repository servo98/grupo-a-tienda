import { useEffect, useState } from "react";
import { createOrder } from "../services/order.service";
import { getCart } from "../services/cart.service";

import { useNavigate } from "react-router";

import CartList from "../components/CartList";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setcart] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCart();
        setcart(data.cart);
      } catch (error) {
        console.error(error);
        console.error("Error al obtener carrito");
      }
    };
    getData();
  }, []);

  const handlePay = async () => {
    try {
      const { data } = await createOrder();
      navigate("/orders");
      console.log(data);
    } catch (error) {
      console.error(error);
      console.error("Error al finalizar compra");
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart ? <CartList cart={cart} /> : <p> Cargando...</p>}

      {cart?.items.length != 0 && (
        <button onClick={handlePay}>Finalizar compra</button>
      )}
    </div>
  );
};

export default Cart;
