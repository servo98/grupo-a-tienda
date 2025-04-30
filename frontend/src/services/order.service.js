import api from "./api";

const getOrders = async () => {
  return api.get("/orders");
};

const createOrder = async () => {
  return api.post("/orders");
};

export { getOrders, createOrder };
