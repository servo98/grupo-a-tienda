import { Router } from "express";

import {
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);

export default productRouter;
