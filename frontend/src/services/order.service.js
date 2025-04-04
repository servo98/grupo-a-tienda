import api from "./api";

const getOrders = async () => {};

const createOrder = async () => {
  return api.post("/orders");
};

export { getOrders, createOrder };
