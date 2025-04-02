import api from "./api";

const createProduct = async (formData) => {
  return api.post("/admin/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const getProductById = async (productId) => {
  return api.get(`/products/${productId}`);
};

const getAdminProducts = async () => {
  return api.get("/admin/products");
};

const editAdminProduct = async (productId, formData) => {
  return api.put(`/admin/products/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export { createProduct, getAdminProducts, editAdminProduct, getProductById };
