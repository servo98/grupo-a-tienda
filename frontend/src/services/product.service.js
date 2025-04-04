import api from "./api";

const getAllProducts = async () => {
  return api.get("/products");
};

const getProductDetail = async (productId) => {
  return api.get(`/products/${productId}`);
};

export { getAllProducts, getProductDetail };
