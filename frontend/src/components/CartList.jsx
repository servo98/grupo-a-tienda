import { useMemo } from "react";

const CartList = ({ cart }) => {
  const total = useMemo(() => {
    return cart.items.reduce((acc, current) => {
      return acc + current.product.price * current.quantity;
    }, 0);
  }, [cart]);

  return (
    <>
      {cart.items.map((item) => {
        return (
          <div key={item.product._id}>
            <p>
              {item.product.name} - ${item.product.price} x {item.quantity}
            </p>
          </div>
        );
      })}
      <h3>Total: {total}</h3>
    </>
  );
};

export default CartList;
