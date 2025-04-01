import api from "./api";

const createProduct = async (formData) => {
  return api.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export { createProduct };
