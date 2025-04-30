import { useState, useEffect } from "react";

import { getOrders } from "../services/order.service";

import Order from "../components/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getOrders();
      setOrders(data.orders);
    };

    getData();
  }, []);

  return (
    <>
      <h4>Orders</h4>
      {orders.map((order) => {
        return <Order key={order._id} order={order} />;
      })}
    </>
  );
};

export default Orders;
