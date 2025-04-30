const Order = ({ order }) => {
  return (
    <div>
      <span>
        {" "}
        - Fecha de compra: {new Date(order.createdAt).toLocaleString()}
      </span>
      <br />
      <span>Total: ${order.total}</span>
      <br />
      <span>Items:</span>
      <ul>
        {order.items.map((item) => {
          return (
            <li key={item._id}>
              {item.product.name}: ${item.product.price} x {item.quantity} = $
              {item.product.price * item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Order;
