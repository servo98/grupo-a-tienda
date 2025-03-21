import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:idProduct", getProductById);
productRouter.post("/", createProduct);
productRouter.put("/:idProduct", updateProductById);

export default productRouter;
