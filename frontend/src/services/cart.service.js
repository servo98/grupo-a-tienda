import api from "./api";

const getCart = async () => {
  return api.get("/cart");
};

const addProductToCart = async (productId, count) => {
  return api.put("/cart/add", { productId, count });
};

export { getCart, addProductToCart };
